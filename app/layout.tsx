import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurelius Vane — Creative Director & Technical Architect',
  description:
    'Selected works and interactive digital experiences directed and engineered by Aurelius Vane. Merging cinematic art direction with bespoke WebGL shaders.',
  keywords: [
    'Creative Director',
    'Technical Architect',
    'WebGL Developer',
    'Three.js',
    'Interactive Portfolio',
    'Digital Art',
    'Frontend Engineering',
  ],
  authors: [{ name: 'Aurelius Vane' }],
  creator: 'Aurelius Vane',
  openGraph: {
    title: 'Aurelius Vane — Creative Director & Technical Architect',
    description:
      'Selected works and interactive digital experiences directed and engineered by Aurelius Vane. Merging cinematic art direction with bespoke WebGL shaders.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/project_lumina_chronicles_1791386245032.jpg',
        width: 1200,
        height: 675,
        alt: 'Aurelius Vane Selected Works Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurelius Vane — Creative Director & Technical Architect',
    description:
      'Selected works and interactive digital experiences directed and engineered by Aurelius Vane. Merging cinematic art direction with bespoke WebGL shaders.',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aurelius Vane',
    jobTitle: 'Creative Director & Technical Architect',
    description:
      'Directing and engineering bespoke cinematic web experiences, WebGL compute pipelines, and design systems.',
    image: '/images/portrait_aurelius_vane_1791386286727.jpg',
    url: 'https://aureliusvane.design',
    knowsAbout: [
      'Creative Direction',
      'WebGL & Three.js',
      'GLSL Shaders',
      'Modern Frontend Architecture',
      'User Experience Design',
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070709] text-[#f5f5f7] antialiased selection:bg-[#e59b4c] selection:text-black min-h-screen">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
