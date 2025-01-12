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
  title: 'Frontend Mentor - Blog Preview Card',
  description:
    'This is a solution to the Blog preview card challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
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
    title: 'Frontend Mentor - Blog Preview Card',
    description:
      'This website is a solution to the Blog preview card challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - Blog preview card solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://blog-preview-card-sigma-five.vercel.app',
  },
  icons: {
    icon: '/icon.png',
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
