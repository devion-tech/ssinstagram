import DownloaderTool from './component/client/DownloaderTool';
import HomeSeoContent from './component/common/HomeSeoContent';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

export const metadata = {
  title: 'Instagram Video Downloader',
  description: 'Download Instagram videos and Reels as MP4 files by pasting an Instagram URL. Use SSInstagram directly in your browser without installing an app.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Instagram Video Downloader',
    description: 'Download Instagram videos and Reels as MP4 files by pasting an Instagram URL. Use SSInstagram directly in your browser without installing an app.',
    url: `${baseUrl}/`,
  },
  twitter: {
    title: 'Instagram Video Downloader',
    description: 'Download Instagram videos and Reels as MP4 files directly from your browser with SSInstagram.',
  },
};

export default function Home() {
  return (
    <main className="main-content">
      <DownloaderTool />
      <HomeSeoContent />
    </main>
  );
}
