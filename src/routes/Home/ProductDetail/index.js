import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../ProductDetail/index.css'
import Header from '../Header'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../../../store/ApiSlice/productSlice'

const ProductDetail = () => {
    const { singleProduct } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log("singleProductsingleProductsingleProduct", singleProduct);
    return (
        <>
            <Header />
            <div className='container'>
                <div className='product_container'>
                    <div className='product_img'>
                        <img src={singleProduct?.image} />
                    </div>
                    <div className='product_detail'>
                        <h1>{singleProduct?.category}</h1>
                        <p>{singleProduct?.title}</p>
                        <p>{singleProduct?.description}</p>
                        <p>{singleProduct?.price}</p>
                        <button onClick={()=> {
                            dispatch(Cart(singleProduct));
                            navigate("/cart")
                        }}>Add to Cart</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail