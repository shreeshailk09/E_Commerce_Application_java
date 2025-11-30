import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/checkout?step=2")
  }
  return (
    <div>
      <div className='lg:grid lg:grid-cols-3 lg:px-16 relative'>
      <div className='col-span-2'>
        {[1,1,1].map((item)=><CartItem />)}
        
      </div>
      <div className='px-6 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
        <div className='border shadow-lg shadow-black-900 px-5'>
           <p className='uppercase font-bold opacity-60 pb-4 '>price Details</p>
           <hr />
           <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price (3 items)</span>
              <span>$1200 </span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Discount</span>
              <span className='text-green-600'>- $1800 </span>
            </div>
            <div className='flex justify-between pt-3 text-black'>
              <span>Delivery Charge</span>
              <span className='text-green-600'>Free </span>
            </div>
            <hr />
            <div className='flex justify-between pt-3 text-black'>
              <span className='font-bold'>Total Amount</span>
              <span className='text-green-600'>$1200 </span>
            </div>
           </div>
           <Button onClick={handleCheckout} variant='contained' sx={{backgroundColor: 'indigo', marginTop: '2rem', marginBottom: '1rem', width: '100%'}}>Place Order</Button>
           </div>

      </div>
      </div>
    </div>
  )
}

export default Cart