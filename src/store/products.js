const initialState = {
  products: [
    {
      name: "snake plant",
      category: "plants",
      description: "leafy plant",
      price: "$25",
      inventory: 5
    },
    {
      name: "aloe plant",
      category: "plants",
      description: "succulent",
      price: "$15",
      inventory: 5
    },
    {
      name: "pilea",
      category: "plants",
      description: "fun circular leaves",
      price: "$20",
      inventory: 5
    },
    {
      name: "small pot",
      category: "pots",
      description: "for small plants",
      price: "$10",
      inventory: 5
    },
    {
      name: "medium pot",
      category: "pots",
      description: "for medium plants",
      price: "$15",
      inventory: 5
    },
    {
      name: "large pot",
      category: "pots",
      description: "for large plants",
      price: "$25",
      inventory: 5
    },
  ], 
  categories: [
    {name: "plants", description: "look for plants"},
    {name: "pots", description: "look for pots"}
  ], 
};

export default function reducer( state=initialState, action ) {

  const { type, payload } = action;

  switch(type) {
    case 'ADD':
      return {...state, products: [payload.inventory - 1]}
    case 'DISPLAY':
      // let products = state.products;
      break;
        default:
          return state;
      }
  }

  export const displayProducts = (category) => {
    return {
      type: 'DISPLAY',
      payload: category
    }
  }

  // export const manageInventory = (item) => {
  //   return {
  //     type: 'ADD', 
  //     payload: item
  // //   }
  // }