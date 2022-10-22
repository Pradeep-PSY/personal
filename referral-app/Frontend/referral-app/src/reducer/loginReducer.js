import { CHECK_REFERRALCODE_SUCCESS, GET_DETAIL_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from "../actions/action.type"
import { saveData } from "../hoc/LocalStorage"

const initialstate = {
 token:'',
 loading:false,
 error:false,
 codevalid:false,
 isAuth:'',
 msg:'',
 signupmsg:'',
 data:[],
 other:{}
}

export const AuthReducer = (state=initialstate, {payload,type}) =>{
    switch(type){
        case CHECK_REFERRALCODE_SUCCESS:{
            return {
                ...state,
                msg: payload.message,
                codevalid:payload.status
            }
        }

        case SIGNUP_SUCCESS:{
           
            return {
                ...state,
                signupmsg:payload
            }
        }


        case LOGIN_SUCCESS :{
           
                alert(payload.message)
           
           
            saveData('token',payload.token)
            saveData('isAuth',payload.isAuth)
            return {
                ...state,
                isAuth:payload.isAuth,
                token:payload.token
            }
        }

        case LOGOUT_SUCCESS:{
            saveData('isAuth',false)
            saveData('token','')
            return {
                ...state,
                isAuth:false,
                token:''
            }
        }

        case GET_DETAIL_SUCCESS:{
            return {
                ...state,
                data:payload.topersonrefered,
                other:payload
            }
        }
        default: return state
    }
}