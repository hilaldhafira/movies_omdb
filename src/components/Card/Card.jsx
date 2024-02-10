import React from 'react';
import shoppingCartIcon from "../../assets/shopping-cart.png"

const Card = ({data, goDetail=()=>{}},...props) => {
    return (
        <div className="w-72 bg-neutral-400 border-neutral-400 rounded justify-between items-center gap-4 h-70 p-4 flex flex-col">
          <img width={160} onClick={()=>goDetail(data)} className='cursor-pointer' height={234} src={data?.Poster} />
          {/* Title */}
          <div onClick={()=>goDetail(data)} className="text-lg text-center text-slate-900 hover:text-blue-600 cursor-pointer">
            {data?.Title} ({data?.Year})
          </div>
          {/* Plot */}
          <div className="text-md text-left text-slate-900"><p className='truncate w-52' children={data.Plot} /></div>
          {/* Actor */}
          <div className="text-md text-left text-slate-900 ">
            {data?.Actors}
          </div>
          {/* Genre */}
          <div className="text-md text-left text-slate-900 ">
            {data?.Genre}
          </div>
          
          {/* Price */}
          <div className="flex gap-3 bg-white p-5 hover:bg-white hover:opacity-80 cursor-pointer rounded-sm">
            <div className="text-md text-left text-slate-900">
              ${data?.Price}
            </div>
            <div>
              <img src={shoppingCartIcon} width={20} height={20} />
            </div>
          </div>
        </div>
    );
}

export default Card;
