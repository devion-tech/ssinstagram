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
    'SSInstagram is an online tool for downloading supported Instagram videos and Reels as MP4 files directly from your browser.',

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
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='none'><rect width='36' height='36' rx='9' fill='%232563eb'/><rect x='7.5' y='7.5' width='21' height='21' rx='6' stroke='white' stroke-width='2.2'/><circle cx='23.2' cy='12.8' r='1.3' fill='white'/><path d='M18 12.5V20.5' stroke='white' stroke-width='2.2' stroke-linecap='round'/><path d='M14.5 17.5L18 21L21.5 17.5' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/><path d='M13.5 24H22.5' stroke='white' stroke-width='2.2' stroke-linecap='round'/></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' fill='none'><rect width='36' height='36' rx='9' fill='%232563eb'/><rect x='7.5' y='7.5' width='21' height='21' rx='6' stroke='white' stroke-width='2.2'/><circle cx='23.2' cy='12.8' r='1.3' fill='white'/><path d='M18 12.5V20.5' stroke='white' stroke-width='2.2' stroke-linecap='round'/><path d='M14.5 17.5L18 21L21.5 17.5' stroke='white' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/><path d='M13.5 24H22.5' stroke='white' stroke-width='2.2' stroke-linecap='round'/></svg>",
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': `${baseUrl}/#webapp`,
      name: 'SSInstagram – Instagram Video Downloader',
      url: `${baseUrl}/`,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      description:
        'SSInstagram is an online Instagram video downloader that lets users download supported Instagram videos and Reels as MP4 files directly from their browser.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Instagram video downloader',
        'Instagram Reels downloader',
        'Download videos as MP4 files',
        'Works directly in a web browser',
        'Works on mobile and desktop devices',
      ],
    },

    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'SSInstagram',
      description: 'Instagram Video Downloader',
      publisher: {
        '@type': 'Organization',
        name: 'SSInstagram',
      },
    },

    {
      '@type': 'HowTo',
      '@id': `${baseUrl}/#howto`,
      name: 'How to Download Instagram Videos',
      description:
        'Follow these steps to download supported Instagram videos and Reels as MP4 files with SSInstagram.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Copy the Instagram Video URL',
          text:
            'Open Instagram and copy the URL of the video or Reel you want to download.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Paste the URL into SSInstagram',
          text:
            'Open ssinstagram.online and paste the Instagram video or Reel URL into the text box.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Start the Download',
          text:
            'Click the Download button and wait while the Instagram video or Reel is processed.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Download the MP4 Video',
          text:
            'When the video is ready, click Download Video (MP4) to save the video to your device.',
        },
      ],
    },

    {
      '@type': 'FAQPage',
      '@id': `${baseUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I download an Instagram video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Copy the URL of the Instagram video, paste it into the SSInstagram downloader, and click the Download button. Once the video is processed, click Download Video (MP4) to save it.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I download an Instagram Reel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Copy the link to the Instagram Reel you want to download and paste it into SSInstagram. Click Download and then use the Download Video (MP4) button when the Reel is ready.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download Instagram videos on my phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Yes. SSInstagram works in a mobile web browser, so you can download supported Instagram videos and Reels on Android, iPhone, and iPad.',
          },
        },
        {
          '@type': 'Question',
          name: 'What format are Instagram videos downloaded in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Supported Instagram videos and Reels are downloaded as MP4 video files.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I download Instagram videos without an app?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "Yes. SSInstagram works directly in your web browser, so you don't need to install a separate downloader app.",
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my Instagram video not downloading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              'Make sure you have copied the correct Instagram URL and that the video or Reel is accessible. You can also try copying the link again and submitting it to the downloader.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is the downloaded Instagram video saved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text:
              "The downloaded MP4 file is normally saved to your browser's default download location. On many devices, you can find it in the Downloads folder.",
          },
        },
      ],
    },
  ],
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

