import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation.jsx'
import Footer from '../customer/components/Footer/Footer.jsx'
import OrderDetails from '../customer/components/Order/OrderDetails.jsx'
import Product from '../customer/components/Product/Product.jsx'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails.jsx'
import Checkout from '../customer/components/Checkout/Checkout.jsx'
import Order from '../customer/components/Order/Order.jsx'

const CustomerRouters = () => {
  return (
    <div>
        <div>
          <Navigation />
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}> </Route>
            <Route path='/cart' element={<Cart />}> </Route>
             <Route path='/:levelOne/:levelTwo/:levelThree/' element={<Product />}> </Route>
            <Route path='/product/:productId' element={<ProductDetails />}> </Route>
            <Route path='/checkout' element={<Checkout />}> </Route>
            <Route path='/account/order' element={<Order />}> </Route>
            <Route path='/account/order/:orderId' element={<OrderDetails />}> </Route>



        </Routes>
        <div>
             <Footer />
        </div>
    </div>
  )
}

export default CustomerRouters