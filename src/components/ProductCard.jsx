import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="card product-card h-100 shadow-sm">
      <div className="product-img-wrapper">
        <img src={product.image} className="card-img-top product-img" alt={product.name} />
        {product.isNew && <span className="badge new-badge">New</span>}
        {product.isSale && <span className="badge sale-badge">Sale</span>}
      </div>
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small mb-2">{product.category}</p>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="price">
              Rs {product.price}{" "}
              {product.oldPrice && <span className="old-price">Rs {product.oldPrice}</span>}
            </div>
            <span className="rating">⭐ {product.rating || "4.5"}</span>
          </div>
          <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm w-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

