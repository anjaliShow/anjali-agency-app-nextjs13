import React from 'react';
import { Title, TitleSm } from './common/Title';
import { expertise } from '@/assets/data/dummydata.js';
import Card from '../components/common/Card';

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Our expertise" />
            <p>
              We are experts in web development, digital marketing, branding,
              and more, helping businesses establish a strong online presence
              and drive growth.
            </p>
          </div>
          <div className="hero-content grid-4">
            {expertise.map((item, index) => {
              return (
                <>
                  <div className="box">
                    <Card
                      data={item}
                      key={index}
                      caption="learn more"
                      path="service"
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
