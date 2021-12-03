const initialState = {
  // categories: [
  //   {categoryName: "plants", 
  //   normalizedName: "plants",
  //   displayName: "plants",
  //   description: "description about plant category",
  //   },
  //   {categoryName: "pots",
  //   normalizedName: "pots",
  //   displayName: "pots",
  //   description: "description about pot category"}
  // ],
  categories: [],
  activeCategory:{}
};

export default function reducer( state=initialState, action ) {

  const { type, payload } = action;

  switch(type) {

    case 'LOAD': 
      return {...state, categories: payload}
     
      //SOMETHING WEIRD GOING ON WITH THIS
    case 'SELECT' :
      let active = state.categories.map( item => {
        if(item.categoryName === payload) {
          console.log('select worked?')
        }
        return item
      })
      return {...state, activeCategory: active}
      
        default:
          return state;
      }
  }

  export const select = (name) => {
    return {
      type: 'SELECT',
      payload: name
    }
  }

  export const load = (obj) => {
    return {
      type: 'LOAD',
      payload: obj
    }
  }

  export const getCategories = () => async dispatch => {
    const response = await fetch('https://auth-api-401.herokuapp.com/api/v1/categories')
    console.log(response);
    const categories = await response.json();
    console.log('categoriesstore', categories)
    dispatch(load(categories));
  }



