import React from 'react';
import { Link } from 'react-router-dom';
import Hobby from './reusable/Hobby';

function Interest(props) {
  return (
    <>
      <section id="interest" className="">
        <Hobby name="DANCING" cls="lexend text-2xl font-black" border="" link="" />
        <Hobby name="DRAWING" cls="playfair text-2xl font-normal" border="" link="" />
        <Hobby name="EDITING VIDEOS" cls="syncopate text-stroke text-transparent text-2xl font-black" border="" link="" />
        <Hobby name="Photography" cls="playfair text-2xl font-black italic" border="border-black border-b" link="/img/pic/about1.jpg" />
      </section>
    </>
  );
}

export default Interest;