import { GET_BMI_SUCCESS, GET_HISTORY_SUCCESS } from "../actions/action.type";

const initialstate = {
bmivalue:'',
hist:[]
}

export const AppReducer = (state=initialstate,{type,payload}) =>{
    switch(type){
        case GET_BMI_SUCCESS:{
            return {
                ...state,
                bmivalue:payload.bmivalue
            }
        }

        case GET_HISTORY_SUCCESS:{
            return {
                ...state,
                hist:payload
            }
        }
        default:{
            return state;

        } 
    }
}