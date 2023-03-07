import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gauge from './reusable/Gauge';
import { TfiPlus } from "react-icons/tfi";

function About(props) {

  function First() {
    return (
      <p>
        답변1
      </p>
    )
  }
  function Second() {
    return (
      <p>
        답변2
      </p>
    )
  }
  function Third() {
    return (
      <p>
        답변3
      </p>
    )
  }
  function Fourth() {
    return (
      <p>
        답변4
      </p>
    )
  }
  function Fifth() {
    return (
      <p>
        답변5
      </p>
    )
  }

  const [isActive, setIsActive] = useState(false);

  const [answer, setAnswer] = useState([]);

  const answerComponent = [
    {id: "first", first: <First />},
    {id: "second", second: <Second />},
    {id: "third", third: <Third />},
    {id: "fourth", fourth: <Fourth />},
    {id: "fifth", fifth: <Fifth />}
  ]

  const interviewclick = (e) => {
    const $name = e.target.parentNode.name;

    // !answer.includes()
  }
  return (
    <>
      <section id="about" className="">
        <div className="title my-3 position-relative">
          <h2 className="playfair text-5xl italic d-flex justify-content-start ps-3">ABOUT</h2>
          <img className="position-absolute top-0 w-3" src="/img/sub/sub03.svg" alt="" />
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
            radio 버튼으로 만들어서 checked 여부로 오픈할지 안 할지 나누는 걸로 만드는 것도 괜찮을듯
            {
              answerComponent.map((value, index) => {
                return (
                  <div className={`qa${index+1}`} key={value.id}>
                    <div className="ques d-flex justify-content-center text-2xl pretendard">
                      <p>질문</p>
                      <button name={value.id} onClick={()=>{
                        setIsActive(isActive => !isActive);
                        setAnswer(value[value.id]);
                      }} className={isActive? 'answerOn' : ''}><TfiPlus /></button>
                      {}
                    </div>
                  </div>
                )
              })
            }


            {/* <div className="qa1">
              <div className="ques d-flex justify-content-center text-2xl pretendard">
                <p>질문</p>
                <button name="first" onClick={interviewclick} className={isActive? 'answerOn' : ''}><TfiPlus /></button>
                {isActive && answer==='first'?answer && <div>{answerComponent[answer]}</div> : null}
              </div>
            </div>
            <div className="qa2">
              <div className="ques d-flex justify-content-center text-2xl pretendard">
                <p>질문</p>
                <button name="second"  onClick={interviewclick}><TfiPlus /></button>
                {isActive && answer==='second'?answer && <div>{answerComponent[answer]}</div> : null}
              </div>
            </div>
            <div className="qa3">
              <div className="ques d-flex justify-content-center text-2xl pretendard">
                <p>질문</p>
                <button name="third" onClick={interviewclick}><TfiPlus /></button>
                {answer==='third'?answer && <div>{answerComponent[answer]}</div> : null}
              </div>
            </div>
            <div className="qa4">
              <div className="ques d-flex justify-content-center text-2xl pretendard">
                <p>질문</p>
                <button name="fourth" onClick={interviewclick}><TfiPlus /></button>
                {answer==='fourth'?answer && <div>{answerComponent[answer]}</div> : null}
              </div>
            </div>
            <div className="qa5">
              <div className="ques d-flex justify-content-center text-2xl pretendard">
                <p>질문</p>
                <button name="fifth" onClick={interviewclick}><TfiPlus /></button>
                {answer==='fifth'?answer && <div>{answerComponent[answer]}</div> : null}
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;