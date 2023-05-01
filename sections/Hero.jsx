import { home } from '@/assets/data/dummydata.js';
import Banner from '@/components/Banner';
import Brand from '@/components/Brand';
import Expertise from '@/components/Expertise';
import Showcase from '@/components/Showcase';
import Testimonial from '@/components/Testimonial';
import BlogCard from '@/components/common/BlogCard';
import { Title, TitleLogo, TitleSm } from '@/components/common/Title';
import React from 'react';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo title="creative" caption="7" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCE</h1>
          <div className="sub-heading">
            <TitleSm className="sub-heading" title="WEBSITE" /> <span>.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div>
        </div>
      </section>
      <div className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last digital agency you'll ever need" />
            <p>
              Suspendisse ut magna porttitor, sollicitudin ligula at, molestie
              dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla
              ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut
              magna porttitor scelerisque.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => {
              return (
                <>
                  <div className="box" key={i}>
                    <span className="green">{item.icon}</span>
                    <br />
                    <br />
                    <h3>{item.title}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Expertise />
      <Banner />
      <Testimonial />
      <Showcase />
      <Brand />
      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
