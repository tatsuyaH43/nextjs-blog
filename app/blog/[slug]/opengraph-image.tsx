// import { ImageResponse } from 'next/og';
// import { dummyData } from '@/app/blog/[slug]/page';
// import { bgImageBase64 } from '@/app/blog/[slug]/bgImageBase64';

// export const runtime = 'edge';
// export const revalidate = 0; // 数値の場合は秒数となる
// export const imageSize = {
//   width: 1200,
//   height: 630,
// };
// export const contentType = 'image/png';

// const og = async ({ params }: { params: { slug: string } }) => {
//   const res = dummyData.filter((data) => data.slug === params.slug)[0];

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           backgroundImage: `url(${bgImageBase64})`,
//           height: '100%',
//           width: '100%',
//           padding: '20px',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <div
//           style={{
//             padding: '40px',
//             height: '100%',
//             width: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             flexDirection: 'column',
//           }}
//         >
//           <div
//             style={{
//               // paddingTop: 60,
//               fontSize: 60,
//               fontStyle: 'normal',
//               letterSpacing: '-0.025em',
//               color: '#333',
//               marginBottom: 120,
//               padding: '0 120px',
//               lineHeight: 1.4,
//               whiteSpace: 'pre-wrap',
//               wordBreak: 'break-all',
//               textAlign: 'center',
//               width: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexGrow: '1',
//             }}
//           >
//             {res.title}
//           </div>
//         </div>
//       </div>
//     ),
//     {
//       ...imageSize,
//       // fonts: [
//       // {
//       //   name: 'Noto_Sans_JP',
//       //   data: fontData,
//       //   style: 'normal',
//       // },
//       // ],
//     }
//   );
// };

// export default og;
