import './ProductDetails.css';

import React, { useContext } from 'react';

import {
  useNavigate,
  useParams,
} from 'react-router-dom';

import Layout from '../components/Layout';
import { AppContext } from '../context/AppContext';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(AppContext);
  const product = products.find((p) => String(p.id) === String(id));
  if (!product) return <div className="not-found">❌ Product not found</div>;

  const onAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <Layout>  
    <div className="product-details container py-5 animate-fade">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center">
          <div className="image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-img shadow-lg"
            />
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <p className="text-muted">{product.category}</p>
          <h3 className="text-primary fw-bold mb-3">Rs {product.price}</h3>
          <p className="product-description">{product.description}</p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <button className="btn btn-primary btn-lg animate-btn" onClick={onAdd}>
              🛒 Add to Cart
            </button>
            <button
              className="btn btn-outline-dark btn-lg animate-btn"
              onClick={() => navigate(-1)}
            >
              🔙 Back
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
