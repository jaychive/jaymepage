import React from 'react';
import { Link } from 'react-router-dom';
import Folio from './reusable/Folio';

function Portfolio(props) {
  return (
    <>
      <Link to="/portfolio">
        <section id="portfolio" className="fullcontainer">
          <h2>PORTFOLIO</h2>
          <div className="folios">
            <Folio />
            <Folio />
            <Folio />
          </div>
        </section>
      </Link>
    </>
  );
}

export default Portfolio;