import { useSelector } from "react-redux";
import Header from "../Header";
import '../Cart/index.css'

const Cart = () => {
    const { cart } = useSelector((state) => state.product)
    return (
        <>
            <Header />
            <div className="container">
                <div className="cart_container">
                    <img src={cart?.image} />
                    <div>
                        <p>{cart?.category}</p>
                        <p>{cart?.title}</p>
                        <p>{cart?.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;