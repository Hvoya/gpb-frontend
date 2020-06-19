import { LOGIN } from '@/store/actions/actionTypes';

const initialState = {
  isLoggedIn: {
    value: false,
    loading: false,
  },
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return { ...state, isLoggedIn: { value: true, loading: false} };
    }
    default: {
      return state;
    }
  }
}
