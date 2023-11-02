import type { Metadata } from 'next';
const siteName = 'サイト自体の名前';
const description = 'OGPのサンプルWebSサイト';
const url = process.env.HOST_PRD ?? 'http://localhost:3000'; // dummy

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
    site: '@hogehgoe',
    creator: '@hogehoge',
  },
  metadataBase: new URL(process.env.HOST_PRD ?? 'http://localhost:3000'),
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootLayout;
