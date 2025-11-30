// src/components/ProductPage.jsx

import { Button } from "@headlessui/react";
import { Box, Grid, Rating } from "@mui/material";
import React, { useState } from "react";
import ProductReviewCard from "./ProductReviewCard";
import LinearProgress from "@mui/joy/LinearProgress";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { mens_kurta } from "../../Data/Men/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate } from "react-router-dom";

const productData = {
  id: 1,
  brand: "LeatherCo",
  name: "Classic Leather Jacket",
  discountedprice: 199.99,
  originalprice: 249.99,
  discountpercentage: 20,
  images: [
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYhdypNIqZt5vPHk-41OuI-DP90F59WyGorW9yM8TsxS3oaux-j3lfVWk3tSiEz4d4jQIBvt7vpPpk9Oo67D43Jhl48B-je1CG-3GV_MrQRayP301TPUEFZw",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRn1NcDTRG1TBU0bCEHNr96FwgnFLpcwEuXcc1MYZZOp3WOINk_54TxCYPARRzQBU4vDgY6OQ2IVCltzi-Fy2vyGqhGKfNJA1LBBN6luZNReogIYeKZ6GebmA",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4RF6jhzzVZilq3R7928xDJ-H-4V-aO0ycTcGrtbTqBO_RQbDD64CWT5pYdVlDE2elmMuOcgUEldfmmM1pV1Y8NDtxgn4d0_MSaG0O9ie8ZPLjy2eTF1ke4C7VXoBiZrUCtWnfrQ&usqp=CAc",
  ],
  description: `This classic leather jacket is crafted with genuine leather and tailored to perfection. With a sleek silhouette and premium finish, it's a must-have for style.`,
  colors: ["Black", "Brown", "Tan"],
  sizes: ["S", "M", "L", "XL"],
  reviews: {
    count: 45,
    rating: 3,
  },
};

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate=useNavigate();


  const handleAddToCart=()=>{
    navigate("/cart")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:px-20">
      <div className="text-sm font-bold  mb-4 flex gap-1">
      <p className="font-semibold opacity-50">Mens \ clothing \ Jacket</p>

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="overflow-hidden ">
          <img
            src={selectedImage}
            alt={productData.name}
            className="w-full h-auto rounded-lg object-cover max-w-[30rem] max-h-[35rem] object-top "
          />
          <div className="mt-4 flex flex-wrap justify-center space-x-4 ">
            {productData.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-lg overflow-hidden  ${
                  selectedImage === img
                    ? "border-indigo-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{productData.brand}</h1>
          <h1 className="text-lg text-gray-900 opacity-60 pt-1">
            {productData.name}
          </h1>

          <div className="flex items-baseline gap-4">
            <p className="text-2xl text-gray-900">
              ${productData.discountedprice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ${productData.originalprice.toFixed(2)}
            </p>
            <p className="text-lg text-green-500 ">
              {productData.discountpercentage} % off
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex gap-1">
              {/* Display stars */}
              <Rating
                name="read-only"
                value={productData.reviews.rating}
                readOnly
              />
            </div>
            <span className="ml-2 text-sm text-indigo-600 font-medium">
              ({productData.reviews.count} reviews)
            </span>
          </div>

          <p className="text-gray-700">{productData.description}</p>

          {/* Color picker */}
          <div>
            <h2 className="text-sm font-medium text-gray-900">Color</h2>
            <div className="mt-2 flex gap-3">
              {productData.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded-md border ${
                    selectedColor === color
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size selector */}
          <div>
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            <div className="mt-2 flex gap-3 ">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md border ${
                    selectedSize === size
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <Button onClick={handleAddToCart} className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-blue-500">
              Add to Cart
            </Button>
          </div>

         
        </div>
      </div>

      <section>
        <h1 className="font-semibold text-lg pb-4 pt-20">
          Recent Review and Ratings
        </h1>
        <div className="border p-5 rounded-lg">
          <Grid container spacing={3}>
              
            <Grid item xs={12} md={6}>
              <div className="space-y-3">
                {[1, 1, 1].map((item) => (
                  <ProductReviewCard key={item} />
                ))}
              </div>
            </Grid>

           
            <Grid item xs={12} md={6} className="px-20">
              <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
              <div className="flex items-center space-x-2">
                <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                <p className="opacity-60">45564 Ratings</p>
              </div>

             
              <Box className="mt-4 space-y-3 ">
                
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Excellent</p>
                  <LinearProgress
                    determinate
                    value={80}
                    sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }}
                    color="success"
                  />
                </div>

                {/* Row 2: Very Good */}
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Very Good</p>
                  <LinearProgress
                    determinate
                    value={60}
                    sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }}
                    color="primary"
                  />
                </div>

                {/* Row 3: Good */}
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Good</p>
                  <LinearProgress
                    determinate
                    value={50}
                    sx={{ bgcolor: "#d0d0d0", flexGrow: 1,color: '#8B4513' }}
                    
                  />
                </div>

                {/* Row 4: Average */}
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Average</p>
                  <LinearProgress
                    determinate
                    value={30}
                    sx={{ bgcolor: "#d0d0d0", flexGrow: 1,color:'#FFD700' }}
                    color="warning"
                  />
                </div>
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Poor</p>
                  <LinearProgress
                    determinate
                    value={20}
                    sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }}
                    color="danger"
                  />
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* Related Products */}
      <section>
         <div className="mt-10">
            <h3 className="text-xl font-semibold">Related Products</h3>
            <div className="flex flex-wrap space-y-5  ">
              {/* Example placeholders */}
              {mens_kurta.map((product) => <HomeSectionCard product={product}/>)
             
              
              }
            </div>
          </div>
      </section>
    </div>
  );
}
