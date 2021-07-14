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
  activeCategory:''
};

export default function reducer( state=initialState, action ) {

  const { type, payload } = action;

  switch(type) {
    // case 'ADD':
    //   let items =  state.products.map( item => {
    //     if(item.name === payload.name) {
    //        item.inventory--;
    //     }
    //     return item      
    //   })
    //   return {...state, products: items};
    case 'LOAD': 
      return {...state, categories: payload}
    case 'SELECT' :
      let active = state.categories.filter( item => {
        if(payload === item.categoryName) {
          return item
        }
      })
      return {...state, activeCategory: active}




      // let showCategories = state.activeCategories.filter( item => {
      //   if(item.categoryName === payload)
      //   return item
      // })
      // let showProducts = state.products.filter ( item => {
      //  if(item.category === payload) {
      //   return item
      // }})
        // return { ...state, activeCategories:showCategories}
      
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
    console.log(categories)
    dispatch(load(categories));
  }



