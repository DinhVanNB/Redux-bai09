import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../redux/action';

export default function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({
            type: types.FETCH_PRODUCT
        })
    },[navigate]);
    const {products} = useSelector(state=>state);
    return(
        <div className='container'>
            <div className='mt-5'>
                <div className='row row-cols-2 row-cols-lg-4 '>
                {
                    products.map(product=>(
                        <div key={product.id} className='p-2 card-group'>
                            <div role='button' 
                            onClick={()=>navigate(`/product/${product.id}`,
                            {state: {...product}})}  
                            className="card product">
                                <div className="card-body  hstack text-center" >
                                    <img  className='mx-auto  h-75 w-75' 
                                    src={product.image}

                                    />
                                </div>
                                <div className='border-top p-2' 
                                style={{height:'12vh'}}>
                                    <div className='overflow-auto' 
                                    style={{height:'55%'}}>
                                        <h5 className=''>{product.title}</h5>
                                    </div>
                                    <div style={{height:'20%'}}>
                                        <h5>${product.price}</h5>
                                    </div>
                                    <div style={{height:'15%'}}>
                                        <small className='text-muted'>
                                        {product.category}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )

}