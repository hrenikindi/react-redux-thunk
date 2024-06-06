import { FETCH_USERS } from '../actions/userActions';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: action.payload === 'Fetching users...',
        users: action.payload === 'Fetching users...' ? [] : action.payload,
        error: action.payload === 'Fetching users...' ? null : action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
