import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import prisma from '../../lib/prisma';

const Home: NextPage = () => {
  return <div>Hello</div>;
};

export const getServerSideProps: GetServerSideProps<{
  count: number;
}> = async (ctx) => {
  const count = 3;
  // const num = await prisma.user.findMany({ where: { authorId: 3 } });
  const num = await prisma.post.findMany({
    where: { authorId: 3 },
  });
  console.log(num);
  return {
    props: {
      count,
    },
  };
};

export default Home;
