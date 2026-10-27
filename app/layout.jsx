import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Providers from './redux/Providers';
import { Header } from './component/common/Header';
import { Footer } from './component/common/Footer';
import Script from 'next/script';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ssinstagram.online';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
});



export const metadata = {
  metadataBase: new URL(baseUrl),

  title: {
    default: 'SSInstagram',
    template: '%s | SSInstagram',
  },

  description:
    'SSInstagram is an Instagram Reels downloader for saving supported Reels as MP4 videos directly from your browser.',

  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },

  openGraph: {
    type: 'website',
    siteName: 'SSInstagram',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SSInstagram',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    manifest: '/site.webmanifest',
  },
};


const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: `${baseUrl}/`,
  name: 'SSInstagram',
  description:
    'SSInstagram is an Instagram Reels downloader for supported videos.',
  publisher: {
    '@type': 'Organization',
    name: 'SSInstagram',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth bg-white font-sans antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-slate-700">
        <Header />
        <Providers>{children}</Providers>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yuv63nwajm");
         `}
        </Script>


      </body>
    </html>
  );
}

