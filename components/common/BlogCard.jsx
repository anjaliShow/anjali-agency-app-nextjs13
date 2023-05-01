import { blogdata } from '@/assets/data/dummydata.js';
import React from 'react';
import Card from './Card';

const BlogCard = () => {
  return (
    <>
      <div className="container blog-card grid-2 py">
        {blogdata.map((item, i) => {
          return (
            <>
              <Card data={item} key={item.id} path="blogs" />
            </>
          );
        })}
      </div>
    </>
  );
};

export default BlogCard;
