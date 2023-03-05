import React from 'react';
import { Link } from 'react-router-dom';
import Gauge from './reusable/Gauge';

function About(props) {
  return (
    <>
      <section id="about" className="fullcontainer">
        <div className="title">
          <h2>ABOUT</h2>
        </div>
        <div className="descMe d-flex flex-wrap justify-content-between">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>

            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <p>

            </p>
          </div>
        </div>
        <div className="gaugeZone">
          <div className="skills">
            <h3>SKILLS</h3>
            <div className="markup d-flex flex-column justify-content-center align-items">
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
            </div>
            <div className="design d-flex flex-column justify-content-center align-items">
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
              <Gauge per="" name="" />
            </div>
          </div>
          <div className="langs">
            <h3>Languages</h3>
            <div className="lang d-flex flex-column justify-content-center align-items">
              <Gauge per="" name="" />
              <Gauge per="" name="" />
            </div>
          </div>
        </div>
        <div className="interview">
          <h3>INTERVIEW</h3>
          <div className="qna">
            <div className="qa1">
              <div className="ques">
                <p>질문</p>
                <img src="" alt="more"><a href=""></a></img>
              </div>
              <div className="ans"><span>답변들</span></div>
            </div>
            <div className="qa2">
              <div className="ques">
                <p>질문</p>
                <img src="" alt="more"><a href=""></a></img>
              </div>
              <div className="ans"><span>답변들</span></div>
            </div>
            <div className="qa3">
              <div className="ques">
                <p>질문</p>
                <img src="" alt="more"><a href=""></a></img>
              </div>
              <div className="ans"><span>답변들</span></div>
            </div>
            <div className="qa4">
              <div className="ques">
                <p>질문</p>
                <img src="" alt="more"><a href=""></a></img>
              </div>
              <div className="ans"><span>답변들</span></div>
            </div>
            <div className="qa5">
              <div className="ques">
                <p>질문</p>
                <img src="" alt="more"><a href=""></a></img>
              </div>
              <div className="ans"><span>답변들</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;