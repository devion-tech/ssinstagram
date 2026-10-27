import DownloaderTool from './component/client/DownloaderTool';
import HomeSeoContent from './component/common/HomeSeoContent';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

export const metadata = {
  title: 'Instagram Reels Downloader',
  description: 'Download supported Instagram Reels as MP4 videos with SSInstagram. Paste a Reel link and save the available video directly from your browser.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Instagram Reels Downloader',
    description: 'Download supported Instagram Reels as MP4 videos with SSInstagram. Paste a Reel link and save the available video directly from your browser.',
    url: `${baseUrl}/`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Reels Downloader',
    description: 'Download supported Instagram Reels as MP4 videos with SSInstagram. Paste a Reel link and save the available video directly from your browser.',
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
