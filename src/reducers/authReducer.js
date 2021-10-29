import { LOGIN,LOGOUT} from '../actions/types';

const initialState = {
  isAuthenticated:false,
  token:"",
  error:""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated:(action.payload?.success)?action.payload.success:false,
        token:(action.payload?.token)?action.payload.token:"",
        error:(action.payload?.error)?action.payload.error:""
      };
    
    default:
      return state;
  }
}