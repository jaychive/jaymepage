import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Folio from './reusable/Folio';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Portfolio(props) {
  const [data, setData] = useState(null);

  const folioData = async () => {
    await axios.get('/jayme?sort=folio')
      .then(res => {
        setData(res.data);
      })
  }

  useEffect(() => {
    folioData();
  }, [])

  console.log(data);

  return (
    <>
      <section id="portfolio" className="container mx-auto px-4">
        <h2 className="playfair font-medium italic text-4xl py-4 flex justify-start ps-2">PORTFOLIO</h2>
        <div className="folios">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="folioSwiper container mx-auto px-4"
          >
            {
              data && data.map((value, index) => {
                return (
                  <SwiperSlide><Folio db={value && value} /></SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Portfolio;