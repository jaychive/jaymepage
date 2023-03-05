import React from 'react';
import { Link } from 'react-router-dom';

function Contact(props) {
  return (
    <>
      <section id="contact" className="container">
        <h2>LET'S MAKE</h2>
        <div className="ctbox">
          <img src="" alt="" className="d-block" />
          <div className="ctdetail">
            <div className="mailphone">
              <h4>
                <p></p>
              </h4>
              <h4>
                <p></p>
              </h4>
            </div>
            <img src="" alt="" className="d-block" />
            <div className="social">
              <h4></h4>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink d-block"><img src="" alt="" /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink d-block"><img src="" alt="" /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink d-block"><img src="" alt="" /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink d-block"><img src="" alt="" /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className="snslink d-block"><img src="" alt="" /></a>
            </div>
          </div>
          <img src="" alt="" className="d-block" />
        </div>
        <Link to="/contact/me">
          <button className="ctme">
            CONTACT ME
          </button>
        </Link>
      </section>
    </>
  );
}

export default Contact;