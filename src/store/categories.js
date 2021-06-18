//initial state

const initialState = {
  categories: [], 
  //selected category to keep track of what state is - state is the selected category
  selectedCategory: {}
};

//reducer function
export default function reducer( state=initialState, action ) {



  const { type, payload } = action;

  switch(type) {
    case 'CHANGECATEGORY':
      return { selectedCategory: payload};
      default:
        return state;
  } 

}

//actions

export const current = (category) => {
  return {
    type: 'CHANGECATEGORY',
    payload: {}
  }
}

