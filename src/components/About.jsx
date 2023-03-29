import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gauge from './reusable/Gauge';
import Interview from './reusable/Interview';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiJquery, SiBootstrap, SiTailwindcss, SiReact, SiSass, SiFigma, SiGithub, SiNotion } from "react-icons/si";

function About(props) {
  const [data, setData] = useState(null);

  const interviewData = async() =>{
    await axios.get('/jayme?sort=interview')
    .then(res => {
      setData(res.data);
    })
  }

  useEffect(()=>{
    interviewData();
  },[])

  console.log(data);

  return (
    <>
      <section id="about" className="container mx-auto px-4">
        <div className="title my-3 relative">
          <h2 className="playfair text-5xl italic flex justify-start ps-3">ABOUT</h2>
          <img className="absolute top-0 w-3" src="/img/sub/sub03.svg" alt="" />
        </div>
        <div className="descMe flex flex-col pt-3">
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
          <img className="block w-5 mx-auto py-3 img-fluid" src="/img/sub/sub02.svg" alt="" />
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
            <h3 className="playfair text-4xl italic flex justify-center mt-5 mb-3">SKILLS</h3>
            <div className="markup flex flex-col justify-center items-center">
              <Gauge per="80" name="html" icon={<SiHtml5 />} />
              <Gauge per="80" name="html" icon={<SiCss3 />} />
              <Gauge per="80" name="html" icon={<SiSass />} />
              <Gauge per="80" name="html" icon={<SiJavascript />} />
              <Gauge per="80" name="html" icon={<SiJquery />} />
              <Gauge per="80" name="html" icon={<SiReact />} />
              <Gauge per="80" name="html" icon={<SiNodedotjs />} />
              <Gauge per="80" name="html" icon={<SiBootstrap />} />
            </div>
            <div className="design flex flex-col justify-center items-center pt-3">
            <Gauge per="60" name="photoshop" icon={<SiFigma />} />
              <Gauge per="60" name="photoshop" icon={<SiAdobephotoshop />} />
              <Gauge per="60" name="illustrator" icon={<SiAdobeillustrator />} />
              <Gauge per="60" name="premiere pro" icon={<SiAdobepremierepro />} />
            </div>
          </div>
          <div className="langs">
            <h3 className="playfair text-4xl italic flex justify-center mt-5 mb-3">Languages</h3>
            <div className="lang flex flex-col justify-center items-center">
              <Gauge per="80" name="EN" icon={null} />
              <Gauge per="90" name="JP" icon={null} />
            </div>
          </div>
        </div>
        <div className="interview">
          <h3 className="playfair text-4xl italic flex justify-center mt-5 mb-3">INTERVIEW</h3>
          <div className="qna pt-3">
            {
            data && data.map((value, index)=>{
              return (
                <Interview no={index+1} border={index===4?'border-b':''} q={value.pi_question} a={value.pi_answer}/>
              )
            })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default About;