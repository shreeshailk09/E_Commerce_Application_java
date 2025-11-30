import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={3} gap={1}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white ' sx={{width:56,height:56,bgcolor:"#9155fd"}}>S</Avatar>
                    
                </Box>

            </Grid>

            <Grid item xs={9} >
                <div className='space-y-2 pt-0 '>
                    <div className='pl-1 pt-2 space-y-1 '>
                        <p>Shree</p>
                        <p className='font-semibold opacity-55'>october 2,2025</p>
                    </div>

                </div>

                <Rating name="read-only" value={4.5} readOnly precision={.5}/>
                <p>This product is really good and worth the price. Highly recommend to others!</p>
            </Grid>
        
        </Grid>
    </div>
  )
}

export default ProductReviewCard