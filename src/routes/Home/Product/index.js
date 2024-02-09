import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SingleProduct, getProduct, getProductCategory } from "../../../store/ApiSlice/productSlice";
import '../Product/index.css'
import Header from "../Header";


export default function Product() {
    const { product } = useSelector((state) => state.product)
    console.log("productproductproduct", product);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProduct());
    }, []);
    return (
        <>
            <Header />
            <div className="container">
                <h1>Product Detail</h1>
                <div className="Category_Container">
                    <div className="Category_Items">
                        <p onClick={() => dispatch(getProduct())}>All Products</p>
                    </div>
                    <div className="Category_Items">
                        <p onClick={() => dispatch(getProductCategory("men's clothing"))}>Men</p>
                    </div>
                    <div className="Category_Items">
                        <p onClick={() => dispatch(getProductCategory("women's clothing"))}>Women</p>
                    </div>
                    <div className="Category_Items">
                        <p onClick={() => dispatch(getProductCategory('electronics'))}>Electronics</p>
                    </div>
                    <div className="Category_Items">
                        <p onClick={() => dispatch(getProductCategory('jewelery'))}>Jewelery</p>
                    </div>
                </div>
                <div className="product-detail">
                    {product?.map((item, index) => {
                        return (
                            <div className="product-list" onClick={() => {
                                console.log("itemitem", item);
                                dispatch(SingleProduct(item))
                                navigate("/productDetail")
                            }}>
                                <img src={item?.image} />
                                <div className="product-category">
                                    <div>{item?.category}</div>
                                    <div>$ {item?.price}</div>
                                </div>
                                <p>{item?.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}