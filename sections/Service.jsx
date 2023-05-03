import { expertise } from '@/assets/data/dummydata.js';
import Card from '@/components/common/Card';
import { Title, TitleSm } from '@/components/common/Title';
import React from 'react';

const Service = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="SERVICES" /> <br />
            <br />
            <Title
              title="Unique technologies & modern approach"
              className="title-bg"
            />
          </div>
          <div className="grid-2 py">
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
