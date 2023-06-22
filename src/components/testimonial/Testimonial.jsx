import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/Rodrigue.jpg";
import AVTR2 from "../../assets/Mom.jpg";
import AVTR3 from "../../assets/Sharlynn.jpg";
import AVTR4 from "../../assets/Joy.jpg";

// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesnpm
import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    avatar: AVTR1,
    name: "Rodrigue",
    review:
      "I was so happy with the front-end design of the app that Brainie designed for me . She arranged everything as it ought to be .",
  },
  {
    avatar: AVTR2,
    name: "Mom",
    review:
      "I was really glad and I am still happy for the work I asked Brainie to do for me. Even though she did it when she just started learning web development but it was really beautiful.",
  },
  {
    avatar: AVTR3,
    name: "Sharlynn",
    review:
      "I was very happy with the work that Brainie did on my website. She was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend Brainie to anyone who is looking for a web developer.",
  },
  {
    avatar: AVTR4,
    name: "Joy",
    review:
      "Brainie was very easy to work with. She was always responsive to my feedback and she was always willing to make changes to the content until I was happy with the results.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
      >
        {data.map(({ avatar, name, review }, index) => {
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