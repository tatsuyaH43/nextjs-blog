import type { Metadata } from 'next';
const siteName = 'あんころもちたろうのポートフォリオ';
const description = 'OGPのサンプルWebSサイト';
const url = process.env.HOST;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@KL2J3BsTnbc7VD8',
    creator: '@KL2J3BsTnbc7VD8',
  },
  metadataBase: new URL(process.env.HOST || ''),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootLayout;
