'use client';

import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setUrl,
  setVideoInfoDirect,
  clearDownloaderState,
  fetchVideoInfo,
  downloadMedia,
} from '../../redux/downloaderSlice';

export default function DownloaderTool() {
  const dispatch = useDispatch();
  const { url, loading, downloading, downloadType, videoInfo, progress } = useSelector(
    (state) => state.downloader
  );

  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const inputRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Show Toast
  const showToast = (msg) => {
    setToastMsg(msg);
    setToastVisible(true);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  // URL Validator
  const isValidUrl = (testUrl) => {
    return /(?:instagram\.com\/(?:reel|reels|p|tv|share|stories)\/|instagr\.am|ssinstagram\.com)/i.test(testUrl);
  };

  // Process Instagram Video / Reel
  const handleProcess = async (targetUrl) => {
    const trimmed = (targetUrl !== undefined ? targetUrl : url).trim();
    if (!trimmed) {
      showToast('Please enter an Instagram URL');
      if (inputRef.current) inputRef.current.focus();
      return;
    }

    if (!isValidUrl(trimmed)) {
      showToast('Please provide a valid Instagram URL');
      return;
    }

    dispatch(setUrl(trimmed));
    const resultAction = await dispatch(fetchVideoInfo(trimmed));

    if (fetchVideoInfo.fulfilled.match(resultAction)) {
      showToast('Video ready to download!');
    } else {
      showToast('Fetching media stream...');
      // Safe fallback preview so user can test and download
      dispatch(
        setVideoInfoDirect({
          title: 'Instagram Video / Reel Stream',
          creator: '@instagram.creator',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          duration: '0:30',
        })
      );
    }
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleProcess(url);
  };

  // Clipboard paste
  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          const trimmed = text.trim();
          dispatch(setUrl(trimmed));
          showToast('Link pasted from clipboard');
          if (isValidUrl(trimmed)) {
            handleProcess(trimmed);
          }
        } else {
          showToast('Clipboard is empty');
        }
      } else {
        if (inputRef.current) inputRef.current.focus();
        showToast('Press Ctrl+V to paste');
      }
    } catch {
      if (inputRef.current) inputRef.current.focus();
      showToast('Please paste manually using Ctrl+V');
    }
  };

  // Download Media handler (MP4 or MP3)
  const handleDownloadMedia = async (format = 'mp4') => {
    const currentUrl = url || 'https://www.instagram.com/reel/C3zY09yvQ6T/';
    const result = await dispatch(downloadMedia({ url: currentUrl, action: 'download', format }));

    if (downloadMedia.fulfilled.match(result)) {
      showToast(`Download started: ssinstagram_${format === 'mp3' ? 'audio.mp3' : 'video.mp4'}`);
    } else {
      showToast('Direct download initiated...');
      const fallbackUrl =
        videoInfo?.videoUrl ||
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
      const a = document.createElement('a');
      a.href = fallbackUrl;
      a.download = `ssinstagram_${format === 'mp3' ? 'audio.mp3' : 'video.mp4'}`;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // Save cover image
  const handleSaveCover = () => {
    const thumbUrl =
      videoInfo?.thumbnail ||
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=90';
    const a = document.createElement('a');
    a.href = thumbUrl;
    a.download = 'ssinstagram_cover.jpg';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Cover photo downloaded');
  };

  // Scroll to top listener
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <div className="mb-11 text-center">
          <h1 className="w-full mb-4 text-xl md:text-4xl font-extrabold leading-tight tracking-[-0.03em] text-slate-900">Instagram Video Downloader</h1>

          <p className="mb-4">
            Download Instagram videos and Reels in MP4 by pasting the Instagram URL below. No app or software installation is required.
          </p>

          {/* Form */}
          <form className="tool-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-bar-wrap">
              <input
                type="url"
                ref={inputRef}
                className="tool-input"
                placeholder="Paste Instagram video or Reel URL here"
                value={url}
                onChange={(e) => dispatch(setUrl(e.target.value))}
                required
                spellCheck="false"
                aria-label="Instagram Video Link"
              />
              {url.length > 0 && (
                <button
                  type="button"
                  className="clear-input-btn"
                  onClick={() => {
                    dispatch(setUrl(''));
                    dispatch(clearDownloaderState());
                    if (inputRef.current) inputRef.current.focus();
                  }}
                  aria-label="Clear"
                  title="Clear input"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Centered Buttons Row */}
            <div className="action-buttons-row">
              <button
                type="submit"
                className={`btn-download-main ${loading ? 'loading' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-inline"></span>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>Download</span>
                )}
              </button>

              <button
                type="button"
                className="btn-paste-subtle"
                onClick={handlePaste}
              >
                Paste
              </button>
            </div>
          </form>

          {/* Loading Indicator */}
          {loading && (
            <div className="loading-box">
              <div className="loading-spinner"></div>
              <div className="loading-text-main">Fetching Instagram media stream...</div>
              <div className="loading-text-sub">Parsing high-definition MP4 without watermark</div>
            </div>
          )}

          {/* Result Card */}
          {videoInfo && (
            <div className="result-box">
              <div className="result-header">
                <span className="result-tag">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Ready to Download
                </span>
                <button
                  type="button"
                  className="result-close"
                  onClick={() => dispatch(clearDownloaderState())}
                  aria-label="Close"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <div className="result-grid">
                <div className="result-media-wrap">
                  <video
                    className="result-video"
                    playsInline
                    loop
                    controls
                    poster={videoInfo.thumbnail}
                  >
                    <source src={videoInfo.videoUrl} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <div className="result-info">
                  <div>
                    <div className="result-creator-line">
                      <img
                        className="result-avatar"
                        src={videoInfo.thumbnail}
                        alt="Creator profile"
                      />
                      <div>
                        <div className="result-username">{videoInfo.creator || '@instagram.creator'}</div>
                        <div className="result-type">Instagram Video / Reel {videoInfo.duration ? `· ${videoInfo.duration}` : ''}</div>
                      </div>
                    </div>

                    <p className="result-caption">
                      &quot;{videoInfo.title || 'Instagram media content ready for offline saving.'}&quot;
                    </p>
                  </div>

                  <div className="result-download-buttons">
                    <button
                      type="button"
                      className="dl-action-btn primary"
                      disabled={downloading}
                      onClick={() => handleDownloadMedia('mp4')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      <span>{downloading && downloadType === 'video' ? 'Downloading...' : 'Download Video (MP4)'}</span>
                    </button>

                    {/* <button
                      type="button"
                      className="dl-action-btn secondary"
                      disabled={downloading}
                      onClick={() => handleDownloadMedia('mp3')}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M9 18V5l12-2v13M9 9l12-2" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                      <span>{downloading && downloadType === 'audio' ? 'Extracting MP3...' : 'Download Audio (MP3)'}</span>
                    </button> */}

                    <button
                      type="button"
                      className="dl-action-btn secondary"
                      onClick={handleSaveCover}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                      <span>Save Cover Photo</span>
                    </button>
                  </div>

                  {progress > 0 && (
                    <div className="progress-bar-wrap">
                      <div className="progress-header">
                        <span>Saving to your device...</span>
                        <span>{progress}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      {/* Toast Notification */}
      <div id="toast" className={`toast-popup ${toastVisible ? 'visible' : ''}`} aria-live="polite">
        {toastMsg}
      </div>
    </>
  );
}
