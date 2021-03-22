export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';
export const ADD_PACK_ITEM = 'ADD_PACK_ITEM';
export const REMOVE_PACK_ITEM = 'REMOVE_PACK_ITEM';
export const EDIT_PACK_ITEM = 'EDIT_PACK_ITEM';

export const addBasketItem = (item) => ({ type: ADD_BASKET_ITEM, payload: item });
export const removeBasketItem = (id) => ({ type: REMOVE_BASKET_ITEM, payload: id });
export const addPackItem = (item) => ({ type: ADD_PACK_ITEM, payload: item });
export const removePackItem = (id) => ({ type: REMOVE_PACK_ITEM, payload: id });
export const editPackItem = (id, item) => ({ type: EDIT_PACK_ITEM, payload: { id, item } });