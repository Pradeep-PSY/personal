import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS,LOGIN_SUCCESS, GET_BMI_SUCCESS, GET_HISTORY_SUCCESS, LOGOUT_SUCCESS } from "./action.type";
import axios from 'axios';
import { LoadData } from "../hoc/LocalStorage";

export const SignupApi = (data) =>dispatch =>{
    dispatch({type:SIGNUP_LOADING})
    axios.post('https://still-coast-42688.herokuapp.com/user/register',data)
    .then((res)=>(console.log(res.data),dispatch({type:SIGNUP_SUCCESS,payload:res.data})))
    .catch((err)=>(console.log(err),dispatch({type:SIGNUP_FAILURE})))
}

export const LoginApi = (data) => dispatch =>{
    axios.post('https://still-coast-42688.herokuapp.com/user/login',data)
    .then((res)=>(console.log(res.data),dispatch({type:LOGIN_SUCCESS,payload:res.data})))
    .catch((err)=>console.log(err))
}

export const getBmi = (data) =>dispatch =>{
    const bmiaxios = axios.create({
        baseURL: "https://still-coast-42688.herokuapp.com/bmi",
        headers: {
          Authorization: `Bearer ${LoadData("userid")}`,
        },
      });
    console.log(data)
    bmiaxios.post('/getbmi',data)
    .then((res)=>(console.log(res),dispatch({type:GET_BMI_SUCCESS,payload:res.data})))
    .catch((err)=>console.log(err))
}


export const getHistory = () => dispatch =>{
    const bmiaxios = axios.create({
        baseURL: "https://still-coast-42688.herokuapp.com/bmi",
        headers: {
          Authorization: `Bearer ${LoadData("userid")}`,
        },
      });
      bmiaxios.get('/history')
      .then((res)=>(console.log(res),dispatch({type:GET_HISTORY_SUCCESS,payload:res.data})))
      .catch((err)=>console.log(err))
}

export const logoutApi = () => dispatch =>{
    dispatch({type:LOGOUT_SUCCESS})
}