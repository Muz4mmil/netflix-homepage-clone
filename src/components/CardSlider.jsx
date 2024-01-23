import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Card from './Card';

const CardSlider = ({ cardData }) => {
  return (
    <div className="slider overflow-hidden">
      <Splide hasTrack={false} options={{
        perPage: 4,
        pagination: false,
        breakpoints: {
          600: {
            perPage: 1,
          },
          800: {
            perPage: 2,
          },
          1000: {
            perPage: 3,
          },
        },
      }}>
        <SplideTrack className='mx-16 overflow-visible'>
          {cardData.map((card, index) => (
            <SplideSlide key={index} className="mx-2">
              <Card {...card} />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev text-white bg-transparent text-2xl drop-shadow-xl disabled:hidden"><i class="fa-solid fa-chevron-left"></i></button>
          <button className="splide__arrow splide__arrow--next text-white bg-transparent text-2xl drop-shadow-xl disabled:hidden"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </Splide>
    </div>
  )
}

export default CardSlider