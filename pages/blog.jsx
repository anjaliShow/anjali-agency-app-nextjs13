import { Blog } from '@/sections/Blog';
import Head from 'next/head';
import React from 'react';

const blogPage = () => {
  return (
    <>
      <Head>
        <title>Team Agency</title>
      </Head>
      <Blog />
    </>
  );
};

export default blogPage;
