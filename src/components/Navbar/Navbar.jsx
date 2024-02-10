import React from "react";
import shoppingCartIcon from "../../assets/shopping-cart.png"
import {useDispatch} from "react-redux"
import { showModalsCart } from "../../store/pageSlice";

const Navbar = () => {
    let dispatch = useDispatch();
  return (
    <>
    <div className="flex">
      <div className="w-full p-3 flex items-center justify-between text-3xl">
        <span>Muvie</span>
        <img onClick={()=>dispatch(showModalsCart(true))} className="cursor-pointer" src={shoppingCartIcon} width={40} height={40} alt="" />
      </div>
    </div>
      
    </>
  );
};

export default Navbar;
