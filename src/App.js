import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
      <Navbar />
      {isOpen && <Modal />}
      <CartContainer />
    </>
  );
}

export default App;
