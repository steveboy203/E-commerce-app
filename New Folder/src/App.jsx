import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import products from './data';
import './index.css';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-container">
      <header>
        <h1>SteveBoy E-Shop</h1>
      </header>

      <main>
        <section className="product-section">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} addToCart={addToCart} />
          ))}
        </section>

        <section className="cart-section">
          <h2>Your Cart</h2>
          {cart.length === 0 && <p>Cart is empty</p>}
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          {cart.length > 0 && (
            <button className="checkout-btn">Checkout</button>
          )}
        </section>
      </main>

      <footer>
        <p>© 2025 SteveBoy E-Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}
