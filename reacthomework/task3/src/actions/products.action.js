import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../constants/products.constants";

export const addItem = (data) => ({type: ADD_ITEM, data});
export const updateItem = (data) => ({type: UPDATE_ITEM, data});
export const deleteItem = (data) => ({type: DELETE_ITEM, data});