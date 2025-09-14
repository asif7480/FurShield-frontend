import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Cart.css';
import Layout from '../components/Layout';

export default function Cart() {
  const { cart, removeFromCart } = useContext(AppContext);
  const total = cart.reduce((s, p) => s + (p.price || 0), 0);

  return (
    <Layout>
    <div className="cart-page container my-5">
      <h2 className="text-center mb-4 fw-bold">🛒 Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="empty-cart text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="empty cart"
            className="empty-cart-img mb-3"
          />
          <h5>Your cart is empty!</h5>
          <p className="text-muted">Add some products to see them here.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((p, idx) => (
              <div className="card cart-item shadow-sm fade-in mb-3" key={idx}>
                <div className="row g-3 align-items-center">
                  <div className="col-3 text-center">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="cart-img"
                    />
                  </div>
                  <div className="col-6">
                    <h6 className="mb-1">{p.name}</h6>
                    <p className="text-muted small">{p.category}</p>
                    <strong className="text-primary">Rs {p.price}</strong>
                  </div>
                  <div className="col-3 text-end">
                    <button
                      className="btn btn-sm btn-outline-danger remove-btn"
                      onClick={() => removeFromCart(idx)}
                    >
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card summary-card shadow-lg p-3 sticky-md-top">
              <h5 className="fw-bold text-center">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Items</span>
                <strong>{cart.length}</strong>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Total</span>
                <strong className="text-success">Rs {total}</strong>
              </div>
              <button className="btn btn-success w-100 fw-bold checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}
