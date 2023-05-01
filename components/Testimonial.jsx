import React from 'react';
import { Title } from './common/Title';
import { testimonial } from '@/assets/data/dummydata.js';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="next" onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slick-arrow">
      <button className="prev" onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="heading-title">
            <Title title="WHAT CLIENTS SAY ABOUT OUR WORK" />
          </div>
          <div className="cards">
            <Slider {...settings}>
              {testimonial.map((user, i) => {
                return (
                  <>
                    <div key={i}>
                      <div className="card">
                        <div className="image">
                          <div className="img">
                            <img src={user.cover} alt="" />
                          </div>
                          <div className="img-text">
                            <h3>{user.name}</h3>
                            <p>{user.post}</p>
                          </div>
                        </div>
                        <div className="details">
                          <p>{user.desc}</p>
                          <Link href={'/'}>
                            VIEW CASE{' '}
                            <HiOutlineArrowRight className="link-icon" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
