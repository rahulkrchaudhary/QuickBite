import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMenuItem } from '../State/Menu/Action';
import { useNavigate } from 'react-router-dom';

export const CarouselItem = ({ image, title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const handleClick = () => {
    dispatch(searchMenuItem({
      keyword: title,
      jwt: auth.jwt || jwt
    }));
    navigate('/search');
  };

  return (
    <div 
      className="flex flex-col justify-center items-center cursor-pointer" 
      onClick={handleClick}
    >
      <img 
        className="w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center" 
        src={image} 
        alt={title} 
      />
      <span className="py-5 font-semibold text-lg lg:text-xl text-gray-400">{title}</span>
    </div>
  )
}
