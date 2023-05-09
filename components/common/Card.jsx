import Link from 'next/link';
import React from 'react';
import { TitleSm } from './Title';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';

const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data?.cover} alt={data?.title} />
          {/* <Image src={data?.cover} alt={data?.title} width={100} height={100} /> */}
        </div>
        <div className="card-details">
          <Link
            href={`${path}/${data?._id || data?.id} `}
            className="title-link"
          >
            <TitleSm title={data.title} />
          </Link>

          {caption && (
            <Link href={`${path}/${data?._id || data?.id}`}>
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <div className="flex">
            <span style={{ textTransform: 'uppercase' }}>
              {' '}
              {data?.catgeory}{' '}
            </span>{' '}
            {data.date && <span> / {data?.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text?.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
