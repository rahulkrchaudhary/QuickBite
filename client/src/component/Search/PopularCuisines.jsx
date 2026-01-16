import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchMenuItem } from "../State/Menu/Action";

export const PopularCuisines = ({ image, title }) => {
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
      <div className="px-3 flex flex-col justify-center items-center" onClick={handleClick}>
        <img
          className="w-[2rem] h-[2rem] lg:w-[4rem] lg:h-[4rem] rounded-full object-cover object-center"
          src={image}
          alt={title}
        />
        <span className="py-2 font-semibold text-xs text-gray-400">
          {title.length>6?title.substring(0,5)+"...":title}</span>
      </div>
    );
  };
  