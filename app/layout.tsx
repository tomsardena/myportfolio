import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08080a] text-[#f4f4f6] antialiased selection:bg-[#d8b08c] selection:text-black min-h-screen">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
