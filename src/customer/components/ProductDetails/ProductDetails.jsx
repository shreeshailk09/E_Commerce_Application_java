import { Button } from "@headlessui/react";
import { Box, Grid, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductReviewCard from "./ProductReviewCard";
import LinearProgress from "@mui/joy/LinearProgress";
import { mens_kurta } from "../../Data/Men/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";

const demoProduct = {
  id: 1,
  brand: "LeatherCo",
  name: "Classic Leather Jacket",
  discountedprice: 199.99,
  originalprice: 249.99,
  discountpercentage: 20,
  images: [
    "https://via.placeholder.com/600x800?text=Image+1",
    "https://via.placeholder.com/600x800?text=Image+2",
    "https://via.placeholder.com/600x800?text=Image+3"
  ],
  description: "This classic leather jacket is crafted with genuine leather and tailored to perfection.",
  colors: ["Black", "Brown", "Tan"],
  sizes: ["S", "M", "L", "XL"],
  reviews: { count: 45, rating: 3 }
};

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const productFromStore = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    if (productFromStore) {
      setSelectedImage(productFromStore.imageUrl || null);
      setSelectedColor(productFromStore.color || "");
      const firstSize =
        Array.isArray(productFromStore.sizes) && productFromStore.sizes.length > 0
          ? productFromStore.sizes[0].name
          : "";
      setSelectedSize(firstSize);
    }
  }, [productFromStore]);

  useEffect(() => {
    if (params.productId) {
      dispatch(findProductsById({ productId: params.productId }));
    }
  }, [dispatch, params.productId]);

  const product = productFromStore || demoProduct;

  const images = (() => {
    const out = [];
    if (productFromStore?.imageUrl) out.push(productFromStore.imageUrl);
    if (Array.isArray(productFromStore?.images)) {
      productFromStore.images.forEach((img) => {
        if (img && !out.includes(img)) out.push(img);
      });
    }
    if (out.length === 0) return demoProduct.images;
    return out;
  })();

  const sizeOptions = Array.isArray(product.sizes)
    ? product.sizes.map((s) => (typeof s === "string" ? s : s.name))
    : demoProduct.sizes;

  const handleAddToCart = () => {
    const data={
      productId:params.productId,size:selectedSize
    }
    console.log("data",data)
    dispatch(addItemToCart(data))
    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-20">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:px-20">
      <div className="text-sm font-bold mb-4 flex gap-1">
        <p className="font-semibold opacity-50">Mens \ clothing \ {product.name}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="overflow-hidden">
          <img
            src={selectedImage || images[0]}
            alt={product.name}
            className="w-full h-auto rounded-lg object-cover max-w-[30rem] max-h-[35rem] object-top"
          />
          <div className="mt-4 flex flex-wrap justify-center space-x-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-lg overflow-hidden ${
                  selectedImage === img ? "border-indigo-500" : "border-gray-200"
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-20 h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.brand || product.title}</h1>
          <h1 className="text-lg text-gray-900 opacity-60 pt-1">{product.title || product.name}</h1>

          <div className="flex items-baseline gap-4">
            <p className="text-2xl text-gray-900">
              ₹{((product.discountPrice ?? product.discountedprice) || product.price).toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 line-through">
              ₹{((product.price ?? product.originalprice) || 0).toFixed(2)}
            </p>
            <p className="text-lg text-green-500">
              {product.discountPercent ?? product.discountpercentage ?? 0}% off
            </p>
          </div>

          <div className="flex items-center">
            <Rating name="read-only" value={product.reviews?.rating || 4} readOnly />
            <span className="ml-2 text-sm text-indigo-600 font-medium">
              ({product.reviews?.count || product.numRatings || 0} reviews)
            </span>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div>
            <h2 className="text-sm font-medium text-gray-900">Color</h2>
            <div className="mt-2 flex gap-3">
              {(product.color ? [product.color] : product.colors).map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1 rounded-md border ${
                    selectedColor === color ? "border-indigo-600 bg-indigo-50" : "border-gray-300 bg-white"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            <div className="mt-2 flex gap-3">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md border ${
                    selectedSize === size ? "border-indigo-600 bg-indigo-50" : "border-gray-300 bg-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">
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
        <h1 className="font-semibold text-lg pb-4 pt-20">Recent Review and Ratings</h1>
        <div className="border p-5 rounded-lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="space-y-3">{[1, 2, 3].map((id) => <ProductReviewCard key={id} />)}</div>
            </Grid>

            <Grid item xs={12} md={6} className="px-20">
              <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
              <div className="flex items-center space-x-2">
                <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                <p className="opacity-60">45564 Ratings</p>
              </div>

              <Box className="mt-4 space-y-3">
                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Excellent</p>
                  <LinearProgress determinate value={80} sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }} color="success" />
                </div>

                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Very Good</p>
                  <LinearProgress determinate value={60} sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }} color="primary" />
                </div>

                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Good</p>
                  <LinearProgress determinate value={50} sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }} />
                </div>

                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Average</p>
                  <LinearProgress determinate value={30} sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }} color="warning" />
                </div>

                <div className="flex items-center">
                  <p className="w-1/3 text-right pr-2 m-0">Poor</p>
                  <LinearProgress determinate value={20} sx={{ bgcolor: "#d0d0d0", flexGrow: 1 }} color="danger" />
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
      </section>

     <section>
  <div className="mt-10">
    <h3 className="text-xl font-semibold">Related Products</h3>
    <div className="flex flex-wrap space-y-5">
      {mens_kurta.map((product, idx) => {
        // prefer a true unique id; otherwise combine fields and fallback to index
        const key =
          product.id ??
          product.sku ??
          `${(product.title ?? product.name ?? "prod").replace(/\s+/g, "-")}-${(product.brand ?? "brand").replace(/\s+/g, "-")}-${idx}`;

        return <HomeSectionCard key={key} product={product} />;
      })}
    </div>
  </div>
</section>

    </div>
  );
}
