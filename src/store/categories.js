//initial state

const initialState = {
  categories: [
    {name: "plants", description: "look for plants"},
    {name: "pots", description: "look for pots"}
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

  // switch(type) {
  //   case 'SELECTCATEGORY':
  //     let categories = state.categories.map(category => 
  //       if(category === payload) {

  //       }
  //     )
  //     //if payload === map of categories, set selectedCategory state to payload
  //     // return { selectedCategory: payload};
  //     // default:
  //     //   return state;
  // } 



//actions

export const selectCategory = (name) => {
  return {
    type: 'SELECT',
    payload: name
  }
}

