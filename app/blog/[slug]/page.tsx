export const dummyData = [
  { slug: '1111', title: 'タイトル1タイトル1タイトル1タイトル1' },
  { slug: '2222', title: 'タイトル2' },
];

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const res = dummyData.filter((data) => data.slug === params.slug)[0];
  return { title: res.title };
};

export const generateStaticParams = async () => {
  return dummyData.map((post) => ({
    slug: post.slug,
  }));
};

const Page = ({ params }: { params: { slug: string } }) => {
  return <div>My Post: {params.slug}</div>;
};

export default Page;
