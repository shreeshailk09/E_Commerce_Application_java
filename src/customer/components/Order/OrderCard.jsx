import { Grid } from "@mui/joy";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate();
    const handleOrderCard=()=>{
        navigate(`/account/order/${5}`)
    }
  return (
    <div onClick={handleOrderCard} className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid container spacing={2} sx={{ justifyContent: "space-between " }}>
        <Grid item xs={6}>
            
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5gvMor2V83Wo4yv668kFNjZ87r0e72n8eI4KnqNLzoY2an2__3vSr-4h6QaUro382Oc0CTLxPkGtEAZLh_OC0Zc6nRHHGbbvV6bByuQGM4YnItYeTWduBqw"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="  ">Granthva Women's Embroidered Anarkali Kurta Set</p>
              <p className="  opacity-50">Size:M</p>
              <p className=" opacity-50">Color:Yellow</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
            <p>$400</p>

        </Grid>
        <Grid item xs={4}>
            
            {true && <p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-500 mr-2 text-sm" />
                <span>Delivered on March 03</span>
                <p className="opacity-50">Your item has been delivered</p>
            </p>
            }
            {false && <p>
                <span>Expected Delivery on March 10</span>
                <p className="opacity-50">Yet to deliver your item</p>
            </p>
            }

            

        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
