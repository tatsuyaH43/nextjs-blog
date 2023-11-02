import { ImageResponse } from 'next/og';
// import { profileImgBase64 } from '@/app/api/og/profileImgBase64';
import { bgImageBase64 } from '@/app/api/og/bgImageBase64';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'My default title';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url(${bgImageBase64})`,
            height: '100%',
            width: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              padding: '40px',
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                // paddingTop: 60,
                fontSize: 60,
                fontStyle: 'normal',
                letterSpacing: '-0.025em',
                color: '#333',
                marginBottom: 120,
                padding: '0 120px',
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: '1',
              }}
            >
              {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // fonts: [
        // {
        //   name: 'Noto_Sans_JP',
        //   data: fontData,
        //   style: 'normal',
        // },
        // ],
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.log(`${error.message}`);
    }
    return new Response('Failed to generate the image', {
      status: 500,
    });
  }
};
