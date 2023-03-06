import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gauge from './reusable/Gauge';
import { TfiPlus } from "react-icons/tfi";

function About(props) {

  function First (){
    <div>
      답변들!!!!
    </div>
  }
  function Second (){
    <div>
      답변들!!!!
    </div>
  }
  function Third (){
    <div>
      답변들!!!!
    </div>
  }
  function Fourth (){
    <div>
      답변들!!!!
    </div>
  }
  function Fifth (){
    <div>
      답변들!!!!
    </div>
  }

  const [answer, setAnswer] = useState('');

  const answerComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
    fourth: <Fourth />,
    fifth: <Fifth />
  }

  const interviewclick = (e)=>{
    const { name } = e.target.parentNode;
    setAnswer(name);
  }
  return (
    <>
      <section id="about" className="">
        <div className="title py-3">
          <h2 className="playfair text-5xl italic d-flex justify-content-start ps-3">ABOUT</h2>
        </div>
        <div className="descMe d-flex flex-column pt-3">
          <div>
            <img src="/img/pic/about1.jpg" className="img-fluid w-3/4" alt="" />
          </div>
          <div className="ms-auto py-3">
            <p className="font-bold pretendard text-xl text-right">
              안녕하세요, 황정연입니다.<br />
              태어난 날은🎂98년 10월 10일이며<br />
              살고 있는 곳은🏡경기도 성남시입니다.
            </p>
          </div>
          <img className="d-block w-5 mx-auto py-3 img-fluid" src="/img/sub/sub02.svg" alt="" />
          <div className="me-auto py-3">
            <p className="font-bold pretendard text-xl text-left">
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
            <h3 className="playfair text-4xl italic d-flex justify-content-center ps-3 pt-5 pb-3">SKILLS</h3>
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
            <h3 className="playfair text-4xl italic d-flex justify-content-center ps-3 pt-5 pb-3">Languages</h3>
            <div className="lang d-flex flex-column justify-content-center align-items">
              <Gauge per="80" name="English" />
              <Gauge per="90" name="Japanese" />
            </div>
          </div>
        </div>
        <div className="interview">
          <h3 className="playfair text-4xl italic d-flex justify-content-center ps-3 pt-5 pb-3">INTERVIEW</h3>
          <div className="qna">
            <div className="qa1">
              <div className="ques">
                <p>질문</p>
                <button name="first" onClick={interviewclick}><TfiPlus /></button>
                <div>{answer && <div>{answerComponent[answer]}</div>}</div>
              </div>
            </div>
            <div className="qa2">
              <div className="ques">
                <p>질문</p>
                <button name="second"><TfiPlus /></button>
                <div>{answer && <div>{answerComponent[answer]}</div>}</div>
              </div>
            </div>
            <div className="qa3">
              <div className="ques">
                <p>질문</p>
                <button name="third"><TfiPlus /></button>
                <div>{answer && <div>{answerComponent[answer]}</div>}</div>
              </div>
            </div>
            <div className="qa4">
              <div className="ques">
                <p>질문</p>
                <button name="fourth"><TfiPlus /></button>
                <div>{answer && <div>{answerComponent[answer]}</div>}</div>
              </div>
            </div>
            <div className="qa5">
              <div className="ques">
                <p>질문</p>
                <button name="fifth"><TfiPlus /></button>
                <span>{answer && <div>{answerComponent[answer]}</div>}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;