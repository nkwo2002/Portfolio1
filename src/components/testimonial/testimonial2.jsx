import React, { useEffect, useState} from 'react';
import axios from 'axios';
import "./testimonial.css";
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide }from 'swiper/react';

// Import Swiper stylesnpm
import "swiper/css";
import "swiper/css/navigation";

const Testimonial =() => {

const [data, setData] = useState([]);
useEffect(()=> {
    axios.get("https://tame-pear-mackerel-ring.cyclic.app/api/testimonial").then(response => {
      const formttedData = response.data.data.map(item => ({
        id:item._id,
        avatar: item.avatar,
       name: item.name,
        review: item.review
        
      }));
      setData(formttedData)
    }).catch(error => {
      console.log("Error fetching portfolio data:", error);
})
}, [])
 
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        {
        data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;