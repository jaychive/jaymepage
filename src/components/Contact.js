import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import Btn from './reusable/Btn';

function Contact(props) {
  return (
    <>
      <section id="contact" className="container">
        <h2 className="pt-3 lexend font-medium text-3xl">LET’S MAKE AMAZING WORKS<br />TOGETHER!</h2>
        <div className="ctbox">
          <img src="/img/sub/sub03.svg" alt="" className="d-block mx-auto w-6 py-5" />
          <div className="ctdetail">
            <div className="mailphone">
              <h4 className="text-lg lexend font-normal mb-3">E-mail</h4>
              <p className="text-base lexend text-slate-600">shuga6@naver.com</p>
              <h4 className="text-lg lexend font-normal mt-5 mb-3">Phone</h4>
              <p className="text-base lexend text-slate-600">010-8906-8760</p>
            </div>
            <img src="/img/sub/sub03.svg" alt="" className="d-block mx-auto w-3 py-5" />
            <div className="social">
              <h4 className="text-lg lexend font-normal mb-3">Social</h4>
              <div className="">
                <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink py-1 d-block lexend text-base text-slate-600"><div className="d-flex align-items-center justify-content-center">
                  <span className="me-1">GITHUB</span><FiArrowRight style={{ transform: "rotate(-45deg)" }} />
                </div></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink py-1 d-block lexend text-base text-slate-600"><div className="d-flex align-items-center justify-content-center">
                  <span className="me-1">VELOG</span><FiArrowRight style={{ transform: "rotate(-45deg)" }} />
                </div></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink py-1 d-block lexend text-base text-slate-600"><div className="d-flex align-items-center justify-content-center">
                  <span className="me-1">NOTION</span><FiArrowRight style={{ transform: "rotate(-45deg)" }} />
                </div></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink py-1 d-block lexend text-base text-slate-600"><div className="d-flex align-items-center justify-content-center">
                  <span className="me-1">INSTAGRAM</span><FiArrowRight style={{ transform: "rotate(-45deg)" }} />
                </div></a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink py-1 d-block lexend text-base text-slate-600"><div className="d-flex align-items-center justify-content-center">
                  <span className="me-1">OPEN KAKAOTALK</span><FiArrowRight style={{ transform: "rotate(-45deg)" }} />
                </div></a>
              </div>
            </div>
          </div>
          <img src="/img/sub/sub03.svg" alt="" className="d-block mx-auto w-6 py-5" />
        </div>
        <Link to="/contact/me">
          <Btn title="CONTACT ME" />
        </Link>
      </section>
    </>
  );
}

export default Contact;