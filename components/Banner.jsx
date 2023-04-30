import React from 'react';
import { Title, TitleLogo } from './common/Title';

const Banner = () => {
  return (
    <>
      <div>
        <section className="banner">
          <div className="container">
            <div>
              <Title
                className=""
                title="We are looking forward to start a new project"
              />
              <TitleLogo title="Let's take your business to the next level!" />
            </div>
            <div>
              <button className="button-primary">
                <b>Request a callback</b>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
