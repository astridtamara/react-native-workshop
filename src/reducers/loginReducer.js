// @flow

type InitialState = {
  token?: string;
  isLogin: boolean;
};

type Action =
  | {
      type: 'LOGIN_REQUEST' | 'LOGIN_FAILED';
    }
  | {
      type: 'LOGIN_SUCCESS';
      payload: {
        token: string;
      };
    };

let initialState: InitialState = {
  isLogin: false,
};

function loginReducer(state: InitialState = initialState, action: Action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {...state, isLogin: true, token: action.payload.token};
    default:
      return state;
  }
}

export default loginReducer;