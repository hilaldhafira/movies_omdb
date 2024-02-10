import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import shoppingCartIcon from "../../assets/shopping-cart.png";
import { ROUTES } from "../../constant/routesConstant";
import { useDispatch } from "react-redux"
import { showModalsCart, showModalsConfirmation } from "../../store/pageSlice";

const DetailMovie = () => {
  let location = useLocation();
  let navigate = useNavigate()
  let dispatch = useDispatch();
  let { state: data } = location;
  return (
    <>
      {/* Box Besar */}
      <div className="flex flex-col gap-3">
        {/* Title */}
        <div className="w-full p-3 flex items-center justify-between text-3xl bg-yellow-300">
          <div>
            {data?.Title} ({data?.Year})
          </div>
          <div onClick={()=>dispatch(showModalsCart(true))} className="cursor-pointer">
            <img width={40} height={40} src={shoppingCartIcon} />
          </div>
        </div>
        <div className="px-4 cursor-pointer hover:text-blue-600" onClick={()=>(navigate(ROUTES.HOME))}>
            {'<'} Back To List
        </div>
        {/* Image */}
        <div className="flex gap-4 p-4">
          <img src={data?.Poster} width={380} height={80} />
          <div className="flex flex-col justify-between">
            {/* Detail Movie */}
            <div>
              <p className="text-2xl">{data?.Plot}</p>
              <p className="text-xl">Released : {data?.Released}</p>
              <p className="text-xl">Director : {data?.Director}</p>
              <p className="text-xl">Genre : {data?.Genre}</p>
              <p className="text-xl">Language : {data?.Language}</p>
            </div>
            {/* Buy now */}
            <div className="cursor-pointer">
              <div onClick={()=>dispatch(showModalsConfirmation({show: true, data:data}))} className="bg-red-500 w-fit p-4 text-white rounded hover:opacity-80">
                ${data?.Price} <br /> Add to Cart{" "}
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-stone-800" />
      </div>
    </>
  );
};

export default DetailMovie;
