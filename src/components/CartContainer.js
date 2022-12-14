import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart)

  return (
    <section className='cart'>
      {amount < 1 &&
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>is actually empty!</h4>
        </header>
      }
      {amount >= 1 &&
        <section>
          <header>
            <h2>Your cart</h2>
            <div>
              {cartItems.map(item => (
                <>
                  <CartItem key={item.id} {...item} />
                </>
              ))}
            </div>
          </header>
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                Total <span>{total.toFixed(2)}</span>
              </h4>
            </div>
            <button
              className='btn clear-btn'
              onClick={
                () => dispatch(openModal())
              }
            >
              Clear cart
            </button>
          </footer>
        </section>
      }
    </section>
  )
}

export default CartContainer