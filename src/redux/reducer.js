import * as types from './action';


const initialState = {
    products : [],
    productSelect:{}
}

export default function rootReducer (state = initialState, action){
    switch(action.type){
        case types.FETCH_PRODUCT_SUCCESS:
            return {...state, products: action.payload}
        case types.FETCH_PRODUCT_BY_ID_SUCCESS:
            return {...state, productSelect: action.payload }
        default:
            return state
    }
}
