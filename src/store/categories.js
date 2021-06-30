//initial state

const initialState = {
  categories: [
    {categoryName: "plants", 
    normalizedName: "plants",
    displayName: "plants",
    description: "description about plant category",
    },
    {categoryName: "pots",
    normalizedName: "pots",
    displayName: "pots",
    description: "description about pot category"}
  ], 
  //selected category to keep track of what state is - state is the selected category
  selectedCategory: {}
};

//reducer function
export default function reducer( state=initialState, action ) {

  const { type, payload } = action;

  switch(type) {
    case 'SELECT':
      // let categories = state.categories;
        return { ...state, selectedCategory: payload}
    default:
        return state;
      }   
  }


export const selectCategory = (name) => {
  return {
    type: 'SELECT',
    payload: name
  }
}

