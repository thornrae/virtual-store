const initialState = {
  items: [],
}

export default function reducer( state=initialState, action) {

  const { type, payload } = action;

  switch(type) {
    case 'ADD':
      return {...state, items: [...state.items, payload]}
    default: 
      return state;
  } 
}

export const addToCart = (item) => {
  return {
    type: 'ADD',
    payload: item
  }
}

