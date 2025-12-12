import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action';
import { updatePayment } from '../../../State/Payment/Action';
import { Alert, AlertTitle, Grid, Paper, Box, Typography, Avatar, Divider } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';

const PaymentSuccess = () => {
    const [paymentId,setPaymentId]=useState();
    const [referenceId,setReferenceId]=useState();
    const [paymentStatus,setPaymentStatus]=useState();
    const {orderId}=useParams();
     
    const dispatch=useDispatch();
    const {order} =useSelector((store)=>store.order || {});

    useEffect(()=>{
        const urlParam=new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get("razorpay_payment_id"))
        setPaymentStatus(urlParam.get("razorpay_payment_link_status"))
    },[])

     useEffect(()=>{
      const data={orderId,paymentId}
      console.log("data-",data)
      if(orderId) dispatch(getOrderById(orderId));
      if(paymentId) dispatch(updatePayment(data));
     },[dispatch,orderId,paymentId])

     const items = order?.orderItems || [];

    return (

    <div className='px-2 lg:px-36'>
      <div className='flex flex-col justify-center items-center'>
          <Alert
          variant="filled"
          severity='success'
          sx={{mb:6,width:"100%", maxWidth: 900}}
          >
            <AlertTitle>Payment Success</AlertTitle>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div>
                <Typography sx={{fontWeight:700}}>Congratulations — your order is placed.</Typography>
                <Typography variant="body2">Order ID: <span style={{fontWeight:600}}>{orderId}</span></Typography>
              </div>
              <div>
                <Typography variant="body2">Status: <strong>{paymentStatus || 'completed'}</strong></Typography>
                {paymentId && <Typography variant="caption" sx={{display:'block',mt:1}}>Payment ref: {paymentId}</Typography>}
              </div>
            </div>

          </Alert>
      </div>
      <OrderTracker activeStep={1} />
    
    <Grid container className='space-y-5 py-5 pt-20' spacing={3}>

     <Grid item xs={12} lg={8}>
       <Paper elevation={3} className='p-5'>
         <Typography variant='h6' sx={{mb:2}}>Order items</Typography>

         {items.length === 0 ? (
           // fallback to the original placeholder appearance if no items
           items.map((item,i)=>(
            <Box key={i} className='shadow-xl rounded-md p-5 mb-4' sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <Box sx={{display:'flex',alignItems:'center',gap:2}}>
                <Avatar variant='rounded' sx={{width:80,height:80}} src={item.product.imageUrl} />
                <div>
                  <Typography sx={{fontWeight:600}}>Title</Typography>
                  <Typography variant='body2' sx={{color:'text.secondary'}}>Color: <strong>item.color</strong> · Size: <strong>item.size</strong></Typography>
                  <Typography variant='body2' sx={{mt:1}}>Seller: <strong>{item.product.brand}</strong></Typography>
                </div>
              </Box>

              <div>
                <Typography sx={{fontWeight:700}}>₹item.price</Typography>
              </div>
              <Grid item xs={12} lg={4}>
       <Paper elevation={3} className='p-5'>
         <Typography variant='h6' sx={{mb:2}}>Shipping address</Typography>
         <Divider sx={{mb:2}} />
         <AddressCard address={order?.shippingAddress || {}}/>
       </Paper>
     </Grid>
            </Box>
           ))
         ) : (
           items.map((item, idx)=>(
             <Box key={item._id || item.id || idx} className='shadow-xl rounded-md p-5 mb-4' sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
               <Box sx={{display:'flex',alignItems:'center',gap:2}}>
                 <Avatar variant='rounded' sx={{width:80,height:80}} src={item.product?.imageUrl || item.image} />
                 <div>
                   <Typography sx={{fontWeight:600}}>{item.product?.title || item.title}</Typography>
                   <Typography variant='body2' sx={{color:'text.secondary'}}>Qty: {item.quantity || 1} · {item.color ? `Color: ${item.color}` : ''} {item.size ? `· Size: ${item.size}` : ''}</Typography>
                   <Typography variant='body2' sx={{mt:1}}>Seller: <strong>{item.product?.brand}</strong></Typography>
                 </div>
               </Box>

               <div>
                 <Typography sx={{fontWeight:700}}>₹{item.price || item.product?.price || 0}</Typography>
               </div>
               
             </Box>
           ))
         )}

       </Paper>
     </Grid>
<Grid item xs={12} lg={4}>
       <Paper elevation={3} className='p-5'>
         <Typography variant='h6' sx={{mb:2}}>Shipping address</Typography>
         <Divider sx={{mb:2}} />
         <AddressCard address={order?.shippingAddress || {}}/>
       </Paper>
     </Grid>
     

    </Grid>
    </div>
  )
}

export default PaymentSuccess
