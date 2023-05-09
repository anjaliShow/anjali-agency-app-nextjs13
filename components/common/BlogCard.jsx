// import { blogdata } from '@/assets/data/dummydata.js';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import Link from 'next/link';

const BlogCard = ({ showLoadMore }) => {
  const [blogdata, setBlogData] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const BlogData = await axios.get('/api/blog');
      console.log('BlogData', BlogData);
      setBlogData(BlogData.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container blog-card grid-2 py">
        {blogdata
          .slice(0, showAllCards ? blogdata.length : 4)
          .map((item, i) => {
            return (
              <>
                <Card data={item} key={item?._id} path="blogs" />
              </>
            );
          })}
      </div>

      {!showAllCards && (
        <>
          {showLoadMore && (
            <>
              <div
                className=""
                style={{
                  textAlign: 'center',
                  width: '100%',
                  marginBottom: '10%',
                }}
              >
                <button
                  className="blog_button"
                  onClick={() => setShowAllCards(!showAllCards)}
                >
                  Load more
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BlogCard;
