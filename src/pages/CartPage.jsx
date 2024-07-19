import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../slise/cartslice';
import { Decrement, Remove } from '../slise/counterSlice';
import './CartPage.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
    dispatch(Decrement());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(Remove());
  };

  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        {items.map((item) => (
          <div key={item.id} className='cart-elem'>
            <img src={item.url} alt='Товар' className='cart-image'/>
            <h2>{item.name}</h2>
            <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
          </div>
        ))}
      </ul>
      <button onClick={handleClearCart}>Очистить корзину</button>
    </div>
  );
};

export default Cart;
