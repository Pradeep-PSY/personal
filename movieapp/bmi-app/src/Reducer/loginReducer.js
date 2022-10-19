import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS,LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/action.type";
import { SaveData } from "../hoc/LocalStorage";

const initialstate = {
loading:false,
error:false,
isAuth:false,
signuped:false,
signupmsg:'',
token:''
}

export const AuthReducer = (state=initialstate,{type,payload}) =>{
    switch(type){

        case SIGNUP_LOADING:{
            return {
                ...state,
                loading:true,
                error:false,
                isAuth:false,
                signup:false
            }
        }
        case SIGNUP_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:false,
                signuped:true,
                signupmsg:payload
            }
        }
        case SIGNUP_FAILURE:{
            return {
                ...state,
                error:true,
                loading:false,
                isAuth:false,
                signup:false,
            }
        }
        case LOGIN_SUCCESS :{
            SaveData('userid',payload.token)
            SaveData('isAuth',true)
            return {
                ...state,
                isAuth:true,
                token:payload.token
            }
        }
        case LOGOUT_SUCCESS:{
            SaveData('isAuth',false)
            SaveData('userid','')
            return {
                ...state,

            }
        }
        default:{
            return state;

        } 
    }
}