import {useParams, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as types from '../redux/action';

export default function Product() {
    const {productId} = useParams();
    const {state} = useLocation();
     // sử dụng useLocation thay cho useSlector vì phản hồi get product theo id của api server chậm
    const dispatch = useDispatch();
    const {productSelect} =useSelector(state=>state);
    useEffect(()=>{
            dispatch({type: types.FETCH_PRODUCT_BY_ID, payload: productId})
    },[productId]);
    return(
        <div className='container p-5'>
            <div className='row row-cols row-cols-lg-2 border rounded'>
                <div className='hstack text-center 
                        product
                     border-end p-5'>
                    <img src={state.title? state.image:productSelect.image} 
                    className='mx-auto  h-100 w-75'/>
                </div>
                <div className=' p-5 vstack'>
                    <div>
                        <h3>{state.title? state.title:productSelect.title}</h3>
                    </div>
                    <div className='mt-3'>
                        <h2>${state.price}</h2>
                    </div>
                    <div className='mt-3 text-white'>
                        <h5 className='
                        text-info
                        bg-secondary 
                        bg-opacity-25 border 
                        pt-3 py-3 px-2 rounded'>
                        ${state.category}
                        </h5>
                    </div>
                    <div className='mt-3'>
                        <p className='text-muted'>{state.title?state.description:productSelect.description}</p>
                    </div>
                    <div className='mt-3'>
                         <button 
                            onClick={()=>
                            alert('Chức năng tạm thời chưa hoạt động!!')}
                         className='btn btn-danger w-25 p-2'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )

}