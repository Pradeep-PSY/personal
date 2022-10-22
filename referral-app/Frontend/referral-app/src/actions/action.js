import axios from 'axios';
import { loadData } from '../hoc/LocalStorage';
import {
  CHECK_REFERRALCODE_SUCCESS,
  GET_DETAIL_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from './action.type';

export const verifyReferal = data => dispatch => {
  axios
    .post('https://sheltered-forest-42158.herokuapp.com/user/check', data)
    .then(res =>
      dispatch({ type: CHECK_REFERRALCODE_SUCCESS, payload: res.data })
    )
    .catch(err => console.log(err));
};

export const signupwithReferal = (referalcode, data) => dispatch => {
  axios
    .post(`https://sheltered-forest-42158.herokuapp.com/user/refer?referalcode=${referalcode}`, data)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const signupwithoutReferal = data => dispatch => {
  axios
    .post('https://sheltered-forest-42158.herokuapp.com/user/register', data)
    .then(res => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const LoginApi = data => dispatch => {
  axios
    .post('https://sheltered-forest-42158.herokuapp.com/user/login', data)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const logoutApi = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS });
};

export const getDetails = () => dispatch => {
  const Detailaxios = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: `Bearer ${loadData('token')}`,
    },
  });

  Detailaxios.get('/referal/detail')
    .then(res => dispatch({ type: GET_DETAIL_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};
