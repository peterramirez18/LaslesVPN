import React from 'react';
import './testimonials.scss';

import photo1 from '../../assets/testimonials-photo1.png';
import photo2 from '../../assets/testimonials-photo2.png';
import photo3 from '../../assets/testimonials-photo3.png';
import iconStar from '../../assets/star-icon.svg';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialsInfo = [
  {
    id: 1,
    photo: photo1,
    name: "Viezh Robert",
    city: "Warsaw, Poland",
    rank: "4.5",
    paragraph:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },

  {
    id: 2,
    photo: photo2,
    name: "Yessica Christy",
    city: "Shanxi, China",
    rank: "4.5",
    paragraph:
      "““I like it because I like to travel far and still can connect with high speed.”.",
  },

  {
    id: 3,
    photo: photo3,
    name: "Kim Young Jou",
    city: "Seoul, South Korea",
    rank: "4.5",
    paragraph:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
]

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonials__title"><h2>Trusted by Thousands of <br /> Happy Customer</h2></div>
        <div className="testimonials__paragraph"><p>These are the stories of our customers who have joined us with great<br /> pleasure when using this crazy feature.</p></div>
       
          <div className="cards">
            {testimonialsInfo.map(testimonial =>
              <div className="card" key={testimonial.id}>
                <div className="card__header">
                  <div className="profile">
                    <div className="profile__photo">
                      <img src={testimonial.photo} alt="profile photo" />
                    </div>
                    <div className="profile__nameandcity">
                      <div className="profile__nameandcity__name">{testimonial.name}</div>
                      <div className="profile__nameandcity__city">{testimonial.city}</div>
                    </div>
                  </div>
                  <div className="card__header__rank">
                    {testimonial.rank} <img src={iconStar} alt="" />
                  </div>
                </div>
                <p>{testimonial.paragraph} </p>
              </div>
            )}

            {testimonialsInfo.map(testimonial =>
              <div className="card" key={testimonial.id}>
                <div className="card__header">
                  <div className="profile">
                    <div className="profile__photo">
                      <img src={testimonial.photo} alt="profile photo" />
                    </div>
                    <div className="profile__nameandcity">
                      <div className="profile__nameandcity__name">{testimonial.name}</div>
                      <div className="profile__nameandcity__city">{testimonial.city}</div>
                    </div>
                  </div>
                  <div className="card__header__rank">
                    {testimonial.rank} <img src={iconStar} alt="" />
                  </div>
                </div>
                <p>{testimonial.paragraph} </p>
              </div>
            )}
          </div>
      
      </div>
    </>
  )
}

export default Testimonials