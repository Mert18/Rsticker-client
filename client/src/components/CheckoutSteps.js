import React from 'react'
import {Link} from 'react-router-dom'
const CheckoutSteps = ({step1, step2, step3, step4}) => {
    return (
        <div>
            <div>
                {step1 ? (
                <div>
                    <Link className='active' to='/login'>Sign In</Link>
                </div>
                ) : 
                <div>
                    <Link className='disabled' to='/login'>Sign In</Link>
                </div>
                }
            </div>
            <div>
                {step2 ? (
                <div>
                    <Link className='active' to='/Shipping'>Shipping</Link>
                </div>
                ) : 
                <div>
                    <Link className='disabled' to='/shipping'>Shipping</Link>
                </div>
                }
            </div>
            <div>
                {step3 ? (
                <div>
                    <Link className='active' to='/placeorder'>Place Order</Link>
                </div>
                ) : 
                <div>
                    <Link className='disabled'>Place Order</Link>
                </div>
                }
            </div>
        </div>
        
    )
}

export default CheckoutSteps
