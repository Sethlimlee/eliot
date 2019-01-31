const initialState = {
  token: ''
};

const UPDATE_TOKEN = "UPDATE_TOKEN";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {...state, token: action.payload}
    default:
      return state;
  }
}

export function updateToken(token) {
  return {
      type: UPDATE_TOKEN,
      payload: token
  }
}