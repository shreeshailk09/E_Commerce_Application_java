import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
const [quantity, setQuantity] = useState(1);
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] border p-2">
          <img
            className="w-full h-full object-cover object-top"
            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5gvMor2V83Wo4yv668kFNjZ87r0e72n8eI4KnqNLzoY2an2__3vSr-4h6QaUro382Oc0CTLxPkGtEAZLh_OC0Zc6nRHHGbbvV6bByuQGM4YnItYeTWduBqw"
            alt="product"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Granthva Women's Embroidered Anarkali Kurta Set
          </p>
          <p className="opacity-70">Size:L,Yellow</p>
          <p className="opacity-70 mt-5">Seller: Granthva Fab</p>

          <div className="flex items-baseline gap-4 pt-5">
            <p className="font-semibold text-gray-900">$400</p>
            <p className="text-sm text-gray-500 line-through">$1000</p>
            <p className=" text-green-500 ">60% off</p>
          </div>
        </div>

        
      </div>
      <div className="lg:flex items-center lg:space-x-3 pt-4">
            <div className="flex items-center space-x-2">
                <IconButton 
                 onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))} >
                    <RemoveCircleOutlineIcon   />
                </IconButton> 
                    <span className="py-1 px-7 rounded-sm border">{quantity}</span>
                <IconButton sx={{color: 'indigo'}}
                onClick={() => setQuantity((q) => q + 1)} >
                    <AddCircleOutlineIcon />
                </IconButton> 

            </div>
            <div>
                <Button sx={{color:"indigo"}}>remove</Button>
            </div>

        </div>
    </div>
  );
};

export default CartItem;
