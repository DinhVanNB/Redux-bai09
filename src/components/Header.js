import {useNavigate} from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    return(
        <div>
            <div className='border-bottom shadow-sm'>
                <div 
                    style={{height:'10vh'}}
                    className='container d-flex '>
                    <h2 
                        onClick={()=>navigate('/')}
                        role='button'
                        className='fw-semibold 
                                align-self-center'
                    >Shop</h2>
                </div>
            </div>
           
        </div>
    )

}