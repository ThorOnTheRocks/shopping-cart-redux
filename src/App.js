import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
  const { cartItems, isLoading } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])


  return (
    <>
      {isLoading &&
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      }
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </>
  );
}

export default App;
