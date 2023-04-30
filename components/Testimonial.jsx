import React from 'react';
import { Title } from './common/Title';
import { testimonial } from '@/assets/data/dummydata.js';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
