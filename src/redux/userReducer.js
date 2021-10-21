import axios from 'axios';

const initialState = {
    user_id: '',
    email: '',
    loading: false,
    errorMessage: ''
}


/* --Reducer actions-- */
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const REGISTER_USER = 'REGISTER_USER';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

export function registerUser(email, password){
    return {
        type: REGISTER_USER,
        payload: axios.post('/api/register', { email, password })
    }
}

export function loginUser(email, password){
    return {
        type: LOGIN_USER,
        payload: axios.post('/api/login', { email, password })
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER
    }
}

export function updateUser(userObj) {
    const { user_id, email, password } = userObj;

    return {
        type: UPDATE_USER,
        payload: axios.put(`/api/update/${user_id}`, { email, password })
    }
}

export function deleteUser(email, password){
    return {
        type: DELETE_USER,
        payload: axios.post('/api/delete', { email, password })
    }
}
/* ^-Reducer actions-^ */


/* --Reducer function-- */
export default function reducer(state = initialState, action){
    switch(action.type){
        case REGISTER_USER + '_PENDING':
            return { ...state, loading: true };
        case REGISTER_USER + '_FULFILLED':
            const { user_id, email } = action.payload.data
            return { ...state, loading: false, user_id, email };
        case REGISTER_USER + '_REJECTED':
            return { ...state, loading: false, errorMessage: action.payload.data.message };
        case LOGIN_USER + '_PENDING':
            return { ...state, loading: true };
        case LOGIN_USER + '_FULFILLED':            
            return { ...state, loading: false, user_id: action.payload.data.user_id, email: action.payload.data.email };
        case LOGIN_USER + '_REJECTED':
            return { ...state, loading: false, errorMessage: action.payload.data.message };
        case UPDATE_USER + '_PENDING':
            return { ...state, loading: true};
        case UPDATE_USER + '_FULFILLED':
            return { ...state, loading: false, user: action.payload.data.user_id };
        case UPDATE_USER + '_REJECTED':
            return { ...state, loading: false };
        case LOGOUT_USER:
            return { ...state, ...initialState };
        case DELETE_USER + '_PENDING':
            return { ...state, loading: true };
        case DELETE_USER + '_FULFILLED':
            return { ...initialState };
        case DELETE_USER + '_REJECTED':
            return { ...state, loading: false, errorMessage: action.payload.data.message };
        default:
            return state;
    }
}
/* ^-Reducer function-^ */