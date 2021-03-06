

const initialState = {
  // products: [
  //   {
  //     name: "snake plant",
  //     category: "plants",
  //     description: "leafy plant",
  //     price: "$25",
  //     inventory: 5
  //   },
  //   {
  //     name: "aloe plant",
  //     category: "plants",
  //     description: "succulent",
  //     price: "$15",
  //     inventory: 5
  //   },
  //   {
  //     name: "pilea",
  //     category: "plants",
  //     description: "fun circular leaves",
  //     price: "$20",
  //     inventory: 5
  //   },
  //   {
  //     name: "small pot",
  //     category: "pots",
  //     description: "for small plants",
  //     price: "$10",
  //     inventory: 5
  //   },
  //   {
  //     name: "medium pot",
  //     category: "pots",
  //     description: "for medium plants",
  //     price: "$15",
  //     inventory: 5
  //   },
  //   {
  //     name: "large pot",
  //     category: "pots",
  //     description: "for large plants",
  //     price: "$25",
  //     inventory: 5
  //   },
  // ], 
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
  activeProducts: [],
  cartItems:[] 
};

export default function reducer( state=initialState, action ) {

  const { type, payload } = action;

  switch(type) {
    case 'ADD':
      let items =  state.activeProducts.map( item => {
        if(item.name === payload.name) {
           item.inStock--;
        }
        return item      
      })
      return {...state, activeProducts: items};
    case 'SELECTPRODUCTS':
      return {...state, activeProducts: payload}
        default:
          return state;
      }
  }

  export const selectCategory = (products) => {
    return {
      type: 'SELECTPRODUCTS',
      payload: products
    }
  }

  export const getProducts = (category) => async (dispatch) => {
    const response = await fetch('https://auth-api-401.herokuapp.com/api/v1/products')
    const products = await response.json();
    const filteredProducts = products.filter(product => product.category === category.categoryName)

      dispatch(selectCategory(filteredProducts))
  }
