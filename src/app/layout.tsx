import './globals.css';
import type { Metadata, Viewport } from 'next';

import localFont from 'next/font/local';

const figtree = localFont({
  display: 'swap',
  src: './fonts/Figtree-VF.ttf',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4d04e',
};

export const metadata: Metadata = {
  title: 'Arda Eker - Blog Preview Card',
  description:
    'A clean blog preview card with optimized metadata and mobile-friendly styling.',
  authors: [{ name: 'Arda Eker', url: 'https://github.com/ardaeker' }],
  keywords: [
    'Frontend Mentor',
    'Blog preview card',
    'Blog preview card solution',
    'Blog preview card challenge',
    'Blog preview card challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('https://blog-preview-card-sigma-five.vercel.app/'),
  openGraph: {
    title: 'Arda Eker - Blog Preview Card',
    description:
      'A clean blog preview card with optimized metadata and mobile-friendly styling.',
    siteName: 'Arda Eker - Blog preview card solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://blog-preview-card-sigma-five.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
