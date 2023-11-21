import axios from "axios";
import { ALLPRODUCT, POSTPRODUCT } from "./ActionType";
export const Get = () => async (dispatch) => {
    try {
      const res = await axios
        .get("http://localhost:5668/product/get/")
        .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }));
    } catch (error) {
      console.log(error);
    }
  
  };
export const AddProduct = (data) => async (dispatch) => {
    try {
      const res = await axios
        .post("http://localhost:5668/product/post/",data)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const DeleteProduct = (data) => async (dispatch) => {
    try {
      const res = await axios
        .delete("http://localhost:5668/product/delete/"+id)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
