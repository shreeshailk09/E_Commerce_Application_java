import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCaartItem } from "../../../State/Cart/Action"; 
// ^ keep name if your action is really spelled like this

const CartItem = ({ item ,readonly = false}) => {
  // start from the server quantity
  const [quantity, setQuantity] = useState(item.quantity ?? 1);
  const dispatch = useDispatch();

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };

  const handleUpdateCartItem = (delta) => {
     if (readonly) return;
    const newQty = quantity + delta;
    if (newQty < 1) return;

    // update UI optimistically
    setQuantity(newQty);

    // payload shape: { cartItemId, quantity }
    const payload = {
      cartItemId: item.id,
      quantity: newQty,
    };

    dispatch(updateCaartItem(payload));
  };

  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] border p-2">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt={item.product.title}
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">
            Size: {item.size}, {item.product.color}
          </p>
          <p className="opacity-70 mt-5">Seller: {item.product.brand}</p>

          <div className="flex items-baseline gap-4 pt-5">
            <p className="font-semibold text-gray-900">
              ₹{item.discountedPrice}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ₹{item.product.price}
            </p>
            <p className="text-green-500">
              {item.product.discountPercent}% off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-3 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={readonly || quantity <= 1}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 rounded-sm border">{quantity}</span>
          <IconButton
            sx={{ color: "indigo" }}
            onClick={() => handleUpdateCartItem(1)}
            disabled={readonly}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        {!readonly &&(
        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "indigo" }}
          >
            remove
          </Button>
        </div>)}
      </div>
    </div>
  );
};

export default CartItem;
