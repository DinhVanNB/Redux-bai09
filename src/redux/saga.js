import {put , takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import * as types from './action';

const baseURL = 'https://fakestoreapi.com/products';


function* getProduct(){
    try{
        const {data}=  yield axios.get(baseURL);
        console.log(data)
        yield put({
            type: types.FETCH_PRODUCT_SUCCESS, payload: data
        })
    }
    catch(err){
        alert('Phản hồi của server api quá lâu!!! ' + err)
    }
}

function* getProductById(action){
    try{
        const {data}=  yield axios.get(`${baseURL}/${action.payload}`);
        yield put({
            type: types.FETCH_PRODUCT_BY_ID_SUCCESS, payload: data
        })
    }
    catch(err){
        alert('err while gettings product by id!!!')
    }
}

export default function* rootSaga(){
    yield takeLatest(types.FETCH_PRODUCT, getProduct);
    yield takeLatest(types.FETCH_PRODUCT_BY_ID,getProductById );
}
