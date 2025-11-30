import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20 pb-10'>
        <div>

        <h1 className='font-semibold py-7 text-xl'>Delivery Address</h1>
        <AddressCard />
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3} />
        </div>

       <Grid className="space-y-5" container>
       
      { [1,1,1].map((item)=> <Grid item container className=" w-full shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}}>
            <Grid item xs={6}>
             
             <div className='flex items-center space-x-4'>
                <img className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5gvMor2V83Wo4yv668kFNjZ87r0e72n8eI4KnqNLzoY2an2__3vSr-4h6QaUro382Oc0CTLxPkGtEAZLh_OC0Zc6nRHHGbbvV6bByuQGM4YnItYeTWduBqw"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p className='font-semibold'>Granthva Women's Embroidered Anarkali Kurta Set</p>
              <p className=" opacity-50 text-xs font-semibold space-x-5"><span>Color:Yellow</span><span>Size: M</span></p>
              <p>Seller:FashionCo</p>
              <p>Price:$400</p>
              
            </div>
             </div>
            </Grid>

            <Grid item >
            <Box sx={{color:deepPurple[500]}}>

                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 '/>
                <span>Rate & Review product</span>

            </Box>
            </Grid>

        </Grid>)}

       </Grid>
    </div>
    
  )
}

export default OrderDetails