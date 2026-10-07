import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE = process.env.NEXT_PUBLIC_INSTAGRAM_API_URL || 'https://instagram-reel-backend-wc6p.onrender.com';

function normalizeResponse(data) {
  if (!data) return null;

  const title = data.title || 'Instagram Media Content';
  const thumbnail = data.thumbnail || data.thumb || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80';
  const duration = data.duration
    ? typeof data.duration === 'number'
      ? `${Math.floor(data.duration / 60)}:${Math.floor(data.duration % 60).toString().padStart(2, '0')}`
      : data.duration
    : '';

  // Extract author / creator username if present
  let creator = '@instagram.user';
  if (data.uploader) {
    creator = `@${data.uploader}`;
  } else if (data.channel) {
    creator = `@${data.channel}`;
  } else if (data.title && data.title.includes('by ')) {
    creator = `@${data.title.split('by ')[1].trim()}`;
  }

  return {
    title,
    thumbnail,
    creator,
    duration,
    videoUrl: data.videoUrl || data.url || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    formats: data.formats || [],
    raw: data,
  };
}

// Fetch Instagram Reel/Video Info
export const fetchVideoInfo = createAsyncThunk(
  'downloader/fetchVideoInfo',
  async (url, { rejectWithValue }) => {
    try {
      const apiUrl = `${API_BASE}/api/instagram/ssInstagram`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, action: 'info' }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch details from Instagram');
      }

      return normalizeResponse(data);
    } catch (err) {
      // If backend fails (e.g., Instagram IP rate-limit / cookie requirements),
      // we reject with message
      return rejectWithValue(err.message || 'Failed to connect. Please check the URL.');
    }
  }
);

// Download Media stream with progress
export const downloadMedia = createAsyncThunk(
  'downloader/downloadMedia',
  async ({ url, action = 'download', format = 'mp4' }, { dispatch, rejectWithValue }) => {
    dispatch(setProgress(10));
    try {
      const apiUrl = `${API_BASE}/api/instagram/ssInstagram`;
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, action, format }),
      });

      if (!res.ok) {
        throw new Error('Download request failed on server');
      }

      dispatch(setProgress(30));
      const contentLength = res.headers.get('content-length');
      const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;

      const reader = res.body.getReader();
      let receivedBytes = 0;
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        receivedBytes += value.length;
        if (totalBytes > 0) {
          const percent = Math.round((receivedBytes / totalBytes) * 100);
          dispatch(setProgress(Math.round(30 + percent * 0.65)));
        }
      }

      dispatch(setProgress(98));

      const allChunks = new Uint8Array(receivedBytes);
      let position = 0;
      for (const chunk of chunks) {
        allChunks.set(chunk, position);
        position += chunk.length;
      }

      const blob = new Blob([allChunks]);
      const filename = format === 'mp3' ? 'ssinstagram_audio.mp3' : 'ssinstagram_video.mp4';
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(a.href);

      dispatch(setProgress(100));
      setTimeout(() => dispatch(setProgress(0)), 1200);
      return true;
    } catch (err) {
      dispatch(setProgress(0));
      return rejectWithValue(err.message || 'Direct stream download failed');
    }
  }
);

const initialState = {
  url: '',
  loading: false,
  downloading: false,
  downloadType: null,
  videoInfo: null,
  error: '',
  progress: 0,
};

const downloaderSlice = createSlice({
  name: 'downloader',
  initialState,
  reducers: {
    setUrl: (state, action) => {
      state.url = action.payload;
      state.error = '';
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVideoInfoDirect: (state, action) => {
      state.videoInfo = action.payload;
      state.loading = false;
      state.error = '';
    },
    clearDownloaderState: (state) => {
      state.videoInfo = null;
      state.error = '';
      state.progress = 0;
      state.loading = false;
      state.downloading = false;
      state.downloadType = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchVideoInfo
      .addCase(fetchVideoInfo.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.videoInfo = null;
      })
      .addCase(fetchVideoInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.videoInfo = action.payload;
      })
      .addCase(fetchVideoInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // downloadMedia
      .addCase(downloadMedia.pending, (state, action) => {
        state.downloading = true;
        state.downloadType = action.meta.arg?.format === 'mp3' ? 'audio' : 'video';
      })
      .addCase(downloadMedia.fulfilled, (state) => {
        state.downloading = false;
        state.downloadType = null;
      })
      .addCase(downloadMedia.rejected, (state, action) => {
        state.downloading = false;
        state.downloadType = null;
        state.error = action.payload;
      });
  },
});

export const {
  setUrl,
  setProgress,
  setError,
  setLoading,
  setVideoInfoDirect,
  clearDownloaderState,
} = downloaderSlice.actions;

export default downloaderSlice.reducer;
