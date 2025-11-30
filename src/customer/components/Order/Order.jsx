import { Grid } from '@mui/joy'
import React from 'react'
import CartItem from '../Cart/CartItem'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router-dom'

const orderStatus=[
    {label:"On The Way",value:"on_the_way"},
    {label:"Delivered",value:"delivered"},
    {label:"Cancelled",value:"cancelled"},
    {label:"Returned",value:"returned"}

]
const Order = () => {
    

  return (
    <div className='px-5 lg:px-20 '>
        <Grid container s={{justifyContnet:"space-between"}}>
            <Grid item xs={2.5}>
             <div className='h-auto shadow-lg bg-white sticky p-5 top-5 space-x-5 mb-10'>
                <h1 className='font-bold text-lg'>Filter</h1>
                <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold'>ORDER STATUS</h1>
                    {orderStatus.map((option)=><div className='flex items-center'>
                        <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-500 text-indigo-600 focus:ring-indigo-500'/>
                        <label className='ml-3 text-gray-600 text-sm' htmlFor={option.value}>
                        {option.label}
                        </label>

                    </div>)}
                </div>

             </div>
            </Grid>

        

            <Grid item xs={9}>
                
                <div  className='space-y-5 pb-5'>

                   {[1,1,1,1].map((item)=> <OrderCard />)}
                </div>
                

            </Grid>
             
        </Grid>
    </div>
  )
}

export default Order