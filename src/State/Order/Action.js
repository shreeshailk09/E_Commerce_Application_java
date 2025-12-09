import { API_BASE_URL } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";


export const createOrder=(reqData,navigate)=> async (dispatch)=>{
  
    dispatch({type:CREATE_ORDER_REQUEST});
   try{
      const {data} = await api.post(
        `/api/orders/`,
        reqData.address,

      );

      if(data.id){
        reqData.navigate({search: `step=3&order_id=${data.id}`});
      }
      console.log("created order - ",data);
      dispatch({
        type:CREATE_ORDER_SUCCESS,
        patload:data,
      });


   } catch(error){
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload:error.message,
   });
   }
};



export const getOrderById = (orderId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });

    console.log("getOrderById → calling API for order:", orderId);

    const { data } = await api.get(`/api/orders/${orderId}`);

    console.log("getOrderById → API response:", data);

    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("getOrderById → error:", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};

