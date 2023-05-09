import { home } from '@/assets/data/dummydata.js';
import Banner from '@/components/Banner';
import Brand from '@/components/Brand';
import Expertise from '@/components/Expertise';
import Showcase from '@/components/Showcase';
import Testimonial from '@/components/Testimonial';
import BlogCard from '@/components/common/BlogCard';
import { Title, TitleLogo, TitleSm } from '@/components/common/Title';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Hero = ({ showLearnMore }) => {
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
              Our company that offers a range of digital services, including web
              design and development, digital marketing, social media
              management, and more. They specialize in helping businesses
              establish a strong online presence and achieve their goals through
              digital channels.
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

      <div
        className=""
        style={{
          textAlign: 'right',
          width: '100%',
          marginBottom: '5%',
          paddingRight: '3%',
        }}
      >
        <Link href={'/blog'}>
          <p style={{ color: '#845aff' }}>
            Learn More{' '}
            <span style={{ alignItems: 'center' }}>
              <BsArrowRight />
            </span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Hero;
