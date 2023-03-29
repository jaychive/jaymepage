import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Hobby from './reusable/Hobby';

function Interest(props) {
  const drawingLink = ["/img/pic/interest_dw1.jpg", "/img/pic/interest_dw2.jpg"];
  const photographyLink = ["/img/pic/interest_ph1.jpg", "/img/pic/interest_ph2.jpg", "/img/pic/interest_ph3.jpg", "/img/pic/interest_ph4.jpg", "/img/pic/interest_ph5.jpg", "/img/pic/interest_ph6.jpg", "/img/pic/interest_ph7.jpg", "/img/pic/interest_ph8.jpg"]

  const [data, setData] = useState(null);

  const hobbyData = async() =>{
    await axios.get('/jayme?sort=interest')
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
  }

  useEffect(()=>{
    hobbyData();
    console.log(data + " : useEffect 안");
  },[])


  return (
    <>
      <section id="interest" className="container mx-auto px-4 px-0">
        <Hobby name="DANCING" cls="lexend text-2xl font-black" border="" link={data && data.media1} desc={data && data.in_desc1} />
        <Hobby name="DRAWING" cls="playfair text-2xl font-normal" border="" link={data && data.media2} desc={data && data.in_desc2} />
        <Hobby name="EDITING VIDEOS" cls="syncopate text-stroke text-transparent text-2xl font-black" border="" link={data && data.media3} desc={data && data.in_desc3} />
        <Hobby name="Photography" cls="playfair text-2xl font-black italic" border="border-black border-b" link={data && data.media4} desc={data && data.in_desc4} />
      </section>
    </>
  );
}

export default Interest;