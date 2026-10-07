import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'SSInstagram – Instagram Reels & Video Downloader',
  description:
    'SSInstagram is a fast and easy-to-use Instagram downloader that helps you save Instagram Reels and videos directly to your device. Works directly from your browser with no app installation required.',
  keywords:
    'ssinstagram, instagram video downloader, instagram reels downloader, download instagram reels, save instagram video, instagram photo downloader, ig downloader',
  metadataBase: new URL('https://ssinstagram.online'),
  alternates: {
    canonical: '/',
  },
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
    title: 'SSInstagram – Instagram Reels & Video Downloader',
    description:
      'SSInstagram is a fast and easy-to-use Instagram downloader that helps you save Instagram Reels and videos directly to your device. Free, web-based, and no app required.',
    url: 'https://ssinstagram.online/',
    images: [
      {
        url: 'https://ssinstagram.online/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SSInstagram – Instagram Reels & Video Downloader',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSInstagram – Instagram Reels & Video Downloader',
    description:
      'SSInstagram is a fast and easy-to-use Instagram downloader that helps you save Instagram Reels and videos directly to your device.',
    images: ['https://ssinstagram.online/og-image.jpg'],
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
      '@id': 'https://ssinstagram.online/#webapp',
      name: 'SSInstagram – Instagram Video Downloader',
      url: 'https://ssinstagram.online/',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'All (iOS, Android, Windows, macOS, Linux)',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      description:
        'SSInstagram is a fast and easy-to-use Instagram video downloader that helps users save Instagram Reels and videos directly to their device for free.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: [
        'Fast Instagram video and Reel downloader',
        'Works directly from your web browser without apps',
        'No registration or personal credentials required',
        'Complete support for Android, iPhone, iPad, Windows, and Mac',
        'High speed MP4 video and MP3 audio conversion',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ssinstagram.online/#website',
      url: 'https://ssinstagram.online/',
      name: 'SSInstagram',
      description: 'Instagram Video Downloader',
      publisher: {
        '@type': 'Organization',
        name: 'SSInstagram',
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://ssinstagram.online/#howto',
      name: 'Steps to Download Instagram Video',
      description:
        'Follow these 5 simple steps to download Instagram videos and Reels with SSInstagram.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Copy Video URL',
          text: 'Copy the URL of the Instagram video or Reel whichever you like.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Visit SSInstagram and Paste',
          text: 'Come to ssinstagram.online and paste that URL over the text box provided.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Select Format and Quality',
          text: 'Select any format (MP4, MP3) and resolution (1080p, 720p).',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Click Download',
          text: 'Now you will see the Download button, simply Click on it.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'View Offline',
          text: 'Successfully Download the video now you can view it any time.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ssinstagram.online/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How to Download a Instagram Video?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the Instagram video URL first then open Chrome, Safari, or any other browser and search ssinstagram.online. Now paste your copied URL in the text area on the website select your preference resolution and click on the download button. Here the Successful video will be downloaded to your device.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Instagram Videos Convert to MP3?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SSInstagram can support Instagram to MP3 and can easily able to download them directly to their preferred device. Just use the simple steps mentioned above.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is SSInstagram Better than App?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, Because using other applications will take up storage space in mobile devices and will ask for Mobile files access permission, or else it will not allow you. But instead of these Apps using SSInstagram website is more beneficial because it doesn't ask for any type of file access is completely safe and secure and we don't ask for any personal details.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I Able to Download Instagram Videos on my Mobile Phone?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes Sure, Anyone can download any Instagram videos or reels directly into their mobile phone. Just visit ssinstagram.online and follow the above mentioned simple steps and you will able to download any Instagram videos or reels on your Android or iOS mobile phone.',
          },
        },
        {
          '@type': 'Question',
          name: 'In Which Place do I See My Downloaded Video from SSInstagram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'User can see their downloaded video in the default path of the device. For example, if a user has downloaded a video he/she can see it in the download folder of their device or at the place where a user has selected it to be downloaded.',
          },
        },
      ],
    },
  ],
};

import Providers from './redux/Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

