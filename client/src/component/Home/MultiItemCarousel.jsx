import React, { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { CarouselItem } from './CarouselItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMenu } from '../State/Menu/Action';

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4, // Adjusted for slightly smaller screens
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    }
  }
]

export const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: true,
    responsive,
  };

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getAllMenu())
  }, [dispatch]);

  const {menu} = useSelector(store=>store);
  console.log("menu in carousel--->", menu);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {menu.allFoodItems.map((item, index) => (
          <CarouselItem key={index} image={item.images} title={item.name} />
        ))}
      </Slider>
    </div>
  )
}
