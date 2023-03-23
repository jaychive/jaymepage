import React from 'react';
import { Link } from 'react-router-dom';
import Folio from './reusable/Folio';

function Portfolio(props) {
  const btnInfo = [
    [
      {
        site: 'Github',
        link: 'https://github.com/jaychive/jaymepage'
      },
      {
        site: 'Figma',
        link: 'https://www.figma.com/file/b33mYNwB5dyNuUIp45T2sB/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80_final?node-id=257%3A17&t=ZNTasBNDMeRTDOpo-0'
      },
      {
        site: 'Site',
        link: 'https://www.naver.com'
      }
    ],
    [
      {
        site: 'Github',
        link: 'https://github.com/jaychive/jaymepage'
      },
      {
        site: 'Figma',
        link: 'https://www.figma.com/file/b33mYNwB5dyNuUIp45T2sB/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80_final?node-id=257%3A17&t=ZNTasBNDMeRTDOpo-0'
      }
    ],
    [
      {
        site: 'Figma',
        link: 'https://www.figma.com/file/b33mYNwB5dyNuUIp45T2sB/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%ED%8E%98%EC%9D%B4%EC%A7%80_final?node-id=257%3A17&t=ZNTasBNDMeRTDOpo-0'
      }
    ]
  ]
  return (
    <>
      <section id="portfolio" className="container">
        <h2 className="playfair font-medium italic text-4xl py-4 d-flex justify-content-start ps-2">PORTFOLIO</h2>
        <div className="folios">
          <Folio btn={btnInfo[0]} per={[10, 60, 30]} link={['/img/sub/stack1.png', '/img/sub/stack1.png', '/img/sub/stack1.png', '/img/sub/stack1.png', '/img/sub/stack1.png']} />
          <Folio btn={btnInfo[1]} per={[30, 40, 30]} link={['/img/sub/stack1.png', '/img/sub/stack1.png', '/img/sub/stack1.png']} />
          <Folio btn={btnInfo[2]} per={[25, 55, 20]} link={['/img/sub/stack1.png']} />
        </div>
      </section>
    </>
  );
}

export default Portfolio;