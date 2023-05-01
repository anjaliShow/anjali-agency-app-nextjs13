import { showcase } from '@/assets/data/dummydata.js';
import React from 'react';
import { Title } from './common/Title';
import Card from './common/Card';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <div className="heading-title">
            <Title title="Selected cases" />
          </div>
          <div className="hero-content grid-3">
            {showcase.map((item, i) => {
              return (
                <>
                  <Card data={item} key={item.id} />
                </>
              );
            })}
          </div>
          <div className="card link">
            <Link href={'/'}>
              VIEW CASE <HiOutlineArrowRight className="link-icon" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
