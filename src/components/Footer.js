import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Footer(props) {
  const location = useLocation();
  
  return (
    <>
    {
      location.pathname !== "/" && location.pathname !== "/contact/me" ?
      <section id="footer" className="">

      </section> : null
    }

    </>
  );
}

export default Footer;