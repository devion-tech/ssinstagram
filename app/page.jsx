import DownloaderTool from './component/client/DownloaderTool';
import HomeSeoContent from './component/common/HomeSeoContent';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

export const metadata = {
  title: 'SSInstagram – Instagram Video Downloader',
  description: 'SSInstagram lets you download supported Instagram videos and Reels as MP4 files. Paste an Instagram link to download directly in your browser without installing an app.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SSInstagram – Instagram Video Downloader',
    description: 'SSInstagram lets you download supported Instagram videos and Reels as MP4 files. Paste an Instagram link to download directly in your browser without installing an app.',
    url: `${baseUrl}/`,
  },
  twitter: {
    title: 'SSInstagram – Instagram Video Downloader',
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
