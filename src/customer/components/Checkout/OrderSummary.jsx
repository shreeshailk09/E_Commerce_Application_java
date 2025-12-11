import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { order, loading, error } = useSelector((store) => store.order);

  const orderId = params.get("order_id");

  useEffect(() => {
    console.log("OrderSummary orderId from URL:", orderId);
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    console.log("Order in Redux store:", order);
  }, [order]);


  const handleCheckout=()=>{

    dispatch(createPayment(orderId))
    console.log("orderId:",orderId)
  }

  const items = order?.orderItems || [];
  const shippingAddress = order?.shippingAddress;
  const deliveryCharge = 0;
  const totalPrice = order?.totalPrice ?? 0;
  const totalDiscountedPrice = order?.totalDiscountedPrice ?? totalPrice;
  const discount =
    order?.discount && order.discount > 0
      ? order.discount
      : totalPrice - totalDiscountedPrice;
  const totalAmount = totalDiscountedPrice + deliveryCharge;

  if (loading && !order) {
    return (
      <div className="max-w-5xl mx-auto p-4 lg:p-6">
        <p>Loading order...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto p-4 lg:p-6">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-6">
      {/* Address section */}
      <div className="mb-5 rounded-md border bg-white p-5 shadow-md">
        <h2 className="mb-3 text-lg font-semibold tracking-wide">
          Delivery Address
        </h2>
        <AddressCard address={shippingAddress} />
        
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-6">
        {/* LEFT: items */}
        <div className="lg:col-span-2 space-y-3 mb-5 lg:mb-0">
          {items.length === 0 ? (
            <p className="p-4 text-sm text-gray-600">
              No items in this order.
            </p>
          ) : (
            items.map((item) => (
              <CartItem key={item.id} item={item} readonly/>
            ))
          )}
        </div>

        {/* RIGHT: price details */}
        <div className="lg:sticky lg:top-4">
          <div className="rounded-md border bg-white p-5 shadow-md">
            <p className="pb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Price Details
            </p>
            <hr />

            <div className="space-y-3 pt-3 text-sm font-medium">
              <div className="flex items-center justify-between text-gray-800">
                <span>Total Price</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex items-center justify-between text-gray-800">
                <span>Discount</span>
                <span className="text-green-600">- ₹{discount}</span>
              </div>

              <div className="flex items-center justify-between text-gray-800">
                <span>Delivery Charge</span>
                <span
                  className={deliveryCharge === 0 ? "text-green-600" : ""}
                >
                  {deliveryCharge === 0 ? "Free" : `₹${deliveryCharge}`}
                </span>
              </div>

              <hr />

              <div className="flex items-center justify-between pt-2 text-base">
                <span className="font-semibold text-gray-900">
                  Total Amount
                </span>
                <span className="font-semibold text-green-700">
                  ₹{totalAmount}
                </span>
              </div>
            </div>

            <Button onClick={handleCheckout}
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 1.5,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: "indigo",
                "&:hover": {
                  backgroundColor: "#3730a3",
                },
              }}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
