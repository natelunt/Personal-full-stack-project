import axios from 'axios';

const initialState = {
    user_id: '',
    email: '',
    loading: false,
    errorMessage: ''
}

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const REGISTER_USER = 'REGISTER_USER';
const DELETE_USER = 'DELETE_USER';

export function registerUser(email, password){
    return {
        type: REGISTER_USER,
        payload: axios.post('/api/register', { email, password })
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case REGISTER_USER + '_PENDING':
            return { ...state, loading: true }
        case REGISTER_USER + '_FULFILLED':
            const { user_id, email } = action.payload.data
            return { ...state, loading: false, user_id, email }
        case REGISTER_USER + '_REJECTED':
            return { ...state, loading: false, errorMessage: action.payload.data.message }
        default:
            return state;
    }
}