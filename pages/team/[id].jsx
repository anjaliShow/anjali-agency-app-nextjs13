import { teamdata } from '@/assets/data/dummydata.js';
import { Title, TitleSm } from '@/components/common/Title';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = teamdata?.find((post) => post?.id === parseInt(id));

  console.log('service', post);

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="TIPS & TRICKS / JANUARY 12, 2022" /> <br />
            <br />
            <Title title={post?.title} className="title-bg" />
            <div className="img py">
              <img
                src={post?.cover}
                alt={post?.title}
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title={post?.post} />
              <p className="desc-p">
                <ul>
                  {post?.desc?.map((elm) => (
                    <li>{elm?.text}</li>
                  ))}
                </ul>
              </p>

              <p className="desc-p">{post?.paragraph}</p>
            </div>
          </div>
          {/* <Banner /> */}
        </div>
      </section>
    </>
  );
};

export default BlogPost;
