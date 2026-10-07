import type { Metadata } from 'next';
import { Syne, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const displayFont = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cinematic Portfolio — Creative Developer & Designer',
  description:
    'A cinematic personal portfolio experience featuring art-directed visual storytelling, smooth camera choreography, and interactive case studies.',
  keywords: [
    'Creative Developer',
    'Interactive Designer',
    'Cinematic Web Experience',
    'Frontend Architecture',
    'GSAP ScrollTrigger',
    'Motion Design',
  ],
  authors: [{ name: '[YOUR NAME]' }],
  creator: '[YOUR NAME]',
  openGraph: {
    title: 'Cinematic Portfolio — Creative Developer & Designer',
    description:
      'A cinematic personal portfolio experience featuring art-directed visual storytelling, smooth camera choreography, and interactive case studies.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/project_lumina_chronicles_1791386245032.jpg',
        width: 1200,
        height: 675,
        alt: 'Cinematic Portfolio Experience Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cinematic Portfolio — Creative Developer & Designer',
    description:
      'A cinematic personal portfolio experience featuring art-directed visual storytelling, smooth camera choreography, and interactive case studies.',
    images: ['/images/project_lumina_chronicles_1791386245032.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="bg-[#09090b] text-[#f5f5f7] antialiased selection:bg-[#d4a373] selection:text-black min-h-screen font-sans">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
