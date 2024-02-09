import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getProduct } from "../../store/ApiSlice/productSlice";
import Header from "./Header";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
    }, []);
    return (
        <div>
            <Header />
            <Product />
        </div>
    );
}
