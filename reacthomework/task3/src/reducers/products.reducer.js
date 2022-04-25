import { ADD_ITEM, UPDATE_ITEM ,DELETE_ITEM } from "../constants/products.constants";

let defaultData = { }

if (localStorage.getItem('products') === null) {
    defaultData = { productsArray: require('./../json/products.json') }
    localStorage.setItem('products', JSON.stringify(defaultData));
} else {
  defaultData = { productsArray: JSON.parse(localStorage.getItem('products')).productsArray }
}

export default (state = defaultData, action) => {
  switch (action.type) {
      case ADD_ITEM:
        localStorage.setItem('products', JSON.stringify({productsArray: [...state.productsArray, action.data]}));
          return ({
              ...state,
              productsArray: [...state.productsArray, action.data]
          });
      case UPDATE_ITEM:
        localStorage.setItem('products', JSON.stringify({ productsArray: state.productsArray.map(el => el.id === action.data.id ? action.data : el) }));
          return ({
              ...state,
              productsArray: state.productsArray.map(el => el.id === action.data.id ? action.data : el)
          });
      case DELETE_ITEM:
        localStorage.setItem('products', JSON.stringify({ productsArray: state.productsArray.map(el => el.id === action.data.id ? el : '') }));
        let tempArray = state.productsArray.slice();
        tempArray.splice(action.data.index, 1)
        localStorage.setItem('products', JSON.stringify({ productsArray: tempArray }));
          return ({
              ...state,
              productsArray: tempArray
          });
      default:
          return state;
  }
};