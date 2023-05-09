import BlogCard from '@/components/common/BlogCard';
import { Title, TitleSm } from '@/components/common/Title';
import Link from 'next/link';
import React from 'react';

export const Blog = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="BLOG" /> <br />
            <br />
            <Title title="Our views on marketing, design & technology" />
          </div>
          <BlogCard showLoadMore={true} />
        </div>
      </section>
    </>
  );
};
