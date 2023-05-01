import { brand } from '@/assets/data/dummydata.js';
import React from 'react';
import Card from './common/Card';
import { Title } from './common/Title';

const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="WE ARE PROUD TO WORK WITH THESE COMPANY" />
          </div>
          <div className="brand-content grid-6 py">
            {brand.map((item, i) => {
              return (
                <>
                  <Card data={item} key={item.id} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
