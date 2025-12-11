import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_REQUEST } from "./ActionType"
import { api } from "../../config/apiConfig";

export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });

  try {
    const res = await api.post(`/api/payments/${orderId}`, {});

    console.log("payment response:", res.data);

    // Razorpay link coming from backend
    const url = res.data.payment_link_url;

    if (url) {
      window.location.href = url;     // <<< redirects user to Razorpay
    } else {
      console.error("No payment URL received");
    }

  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};


export const updatePayment=(reqData)=> async (dispatch)=>{

    dispatch({type:UPDATE_PAYMENT_REQUEST})
    try{
      const data=await api.get(`/api/payments?=${reqData.orderId}&order_id=${reqData.orderId}`);

      
      console.log("update payment : -" , data)
    } catch(error){
       dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
};

