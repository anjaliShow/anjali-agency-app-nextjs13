import { blogdata } from '@/assets/data/dummydata.js';
import Banner from '@/components/Banner';
import { Title, TitleSm } from '@/components/common/Title';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const BlogPost = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { id } = router.query;

  // const post = blogdata.find((post) => post.id === parseInt(id));

  useEffect(() => {
    const getData = async () => {
      const BlogData = await axios.get(`/api/blog?id=${id}`);
      console.log('BlogData', BlogData);
      setPost(BlogData?.data);
    };
    getData();
  }, [id]);

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
              <TitleSm title="Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat." />
              <p className="desc-p">{post?.description}</p>
              <p className="desc-p">{post?.description2}</p>
              {/* <Banner /> */}
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <p className="desc-p">{post?.description2}</p>
              <p className="desc-p">
                Quisque congue ante in consequat auctor. Morbi ut accumsan eros.
                Mauris semper suscipit mattis. Cras pellentesque a urna ac
                dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante
                dui imperdiet nisi, ut tincidunt nulla tortor nec purus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
