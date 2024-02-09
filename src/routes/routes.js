import { createBrowserRouter } from "react-router-dom";
import Product from "./Home/Product";
import ProductDetail from "./Home/ProductDetail";
import Cart from "./Home/Cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Product />
        )
    },
    {
        path: "/productDetail",
        element: (
            <ProductDetail />
        )
    },
    {
        path: "/cart",
        element: (
            <Cart />
        )
    }
])

export default router;
