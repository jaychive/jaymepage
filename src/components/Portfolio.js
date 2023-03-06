import React from 'react';
import { Link } from 'react-router-dom';
import Folio from './reusable/Folio';

function Portfolio(props) {
  return (
    <>
      <section id="portfolio" className="">
        <h2>PORTFOLIO</h2>
        <div className="folios">
          <Folio />
          <Folio />
          <Folio />
        </div>
      </section>
    </>
  );
}

export default Portfolio;