import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gauge from './reusable/Gauge';
import Interview from './reusable/Interview';

function About(props) {

  return (
    <>
      <section id="about" className="container">
        <div className="title my-3 position-relative">
          <h2 className="playfair text-5xl italic d-flex justify-content-start ps-3">ABOUT</h2>
          <img className="position-absolute top-0 w-3" src="/img/sub/sub03.svg" alt="" />
        </div>
        <div className="descMe d-flex flex-column pt-3">
          <div>
            <img src="/img/pic/about1.jpg" className="img-fluid w-3/4" alt="" />
          </div>
          <div className="ms-auto py-3">
            <p className="font-bold pretendard text-lg text-right">
              안녕하세요, 황정연입니다.<br />
              태어난 날은🎂98년 10월 10일이며<br />
              살고 있는 곳은🏡경기도 성남시입니다.
            </p>
          </div>
          <img className="d-block w-5 mx-auto py-3 img-fluid" src="/img/sub/sub02.svg" alt="" />
          <div className="me-auto py-3">
            <p className="font-bold pretendard text-lg text-left">
              최종 학력은 🎒서경대학교<br />
              경영학부에서 경영학🏢을 전공하였으며<br />
              일어🇯🇵를 복수전공했습니다.<br />
              TOEIC🗽 000점이며,<br />
              JLPT N1⛩을 취득했습니다
            </p>
          </div>
          <div>
            <img src="/img/pic/about2.jpg" className="img-fluid w-3/4 ms-auto" alt="" />
          </div>

        </div>
        <div className="gaugeZone">
          <div className="skills">
            <h3 className="playfair text-4xl italic d-flex justify-content-center mt-5 mb-3">SKILLS</h3>
            <div className="markup d-flex flex-column justify-content-center align-items">
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
              <Gauge per="80" name="html" />
            </div>
            <div className="design d-flex flex-column justify-content-center align-items pt-3">
              <Gauge per="60" name="photoshop" />
              <Gauge per="60" name="photoshop" />
              <Gauge per="60" name="photoshop" />
              <Gauge per="60" name="photoshop" />
            </div>
          </div>
          <div className="langs">
            <h3 className="playfair text-4xl italic d-flex justify-content-center mt-5 mb-3">Languages</h3>
            <div className="lang d-flex flex-column justify-content-center align-items">
              <Gauge per="80" name="EN" />
              <Gauge per="90" name="JP" />
            </div>
          </div>
        </div>
        <div className="interview">
          <h3 className="playfair text-4xl italic d-flex justify-content-center mt-5 mb-3">INTERVIEW</h3>
          <div className="qna pt-3">
            <Interview no="1" border="" />
            <Interview no="2" border="" />
            <Interview no="3" border="" />
            <Interview no="4" border="" />
            <Interview no="5" border="border-b" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;