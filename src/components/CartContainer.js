import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const CartContainer = () => {
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
                total <span>{total}</span>
              </h4>
            </div>
            <button className='btn clear-btn'>Clear cart</button>
          </footer>
        </section>
      }

    </section>
  )
}

export default CartContainer