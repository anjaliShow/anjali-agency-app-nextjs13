import { Title, TitleSm } from '@/components/common/Title';
import axios from 'axios';
import React, { useState } from 'react';
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { FiHeadphones, FiHelpCircle } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [timeframe, setTimeFrame] = useState('');
  const [budget, setBudget] = useState('');
  const [greet, setGreet] = useState(false);
  const [error, setError] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    //   console.log("_id", _id);
    const data = { name, email, description, timeframe, budget };
    console.log('data', { data });
    //update product
    try {
      const req = await axios.post(`/api/contact`, data);
      console.log('req ', req);
      setGreet(true);
    } catch (error) {
      setError(true);
      console.log('error', error);
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>New York</h3>
                  <span>
                    990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022
                  </span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@dream-theme.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>hr@dream-theme.com</h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
              <ul>
                <li className="icon">
                  <BsFacebook size={25} />
                </li>
                <li className="icon">
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className="icon">
                  <AiFillInstagram size={25} />
                </li>
                <li className="icon">
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.{' '}
              </p>

              <form onSubmit={handleContact}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      placeholder="john@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>your budget</span>
                    <input
                      type="text"
                      placeholder="2K doller"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />
                  </div>
                  <div className="inputs">
                    <span>timeframe</span>
                    <input
                      type="text"
                      placeholder="1pm - 2pm"
                      value={timeframe}
                      onChange={(e) => setTimeFrame(e.target.value)}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="I want e-commerce app..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <button className="button-primary" type="submit">
                  Submit
                </button>
                {greet && (
                  <>
                    <p
                      style={{
                        color: '#00dc93',
                        textShadow: '#fff',
                        marginTop: '10px',
                        textAlign: 'center',
                      }}
                    >
                      Thank you for your message...
                    </p>
                  </>
                )}
                {error && (
                  <>
                    <p
                      style={{
                        color: '#dc0054',
                        textShadow: '#fff',
                        marginTop: '10px',
                        textAlign: 'center',
                      }}
                    >
                      Something wrong! Try again...
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
