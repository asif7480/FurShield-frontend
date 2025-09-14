// src/pages/dashboard/Product.jsx
import './Product.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { Link } from 'react-router-dom';
import Layout from '../../components/dashboard/Layout';
import { useGlobal } from '../../context/GlobalContext';

export default function Product() {
  const { loading, error, products, getAllProducts, deleteProduct } = useGlobal()
  console.log(products);

  useEffect(() => {
    getAllProducts(); 
  }, []);

  const handleDelete = async(id) => {
    try{
      const response = await deleteProduct(id)
      alert("product has been deleted successfully")
    }catch(err){
      console.log(err);
    }finally{
      getAllProducts()
    }
  }

  if (loading) {
    return (
      <Layout>
        <div className="products-page container py-4 text-center">
          <p>Loading products...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="products-page container py-4 text-center">
          <p className="text-danger">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="products-page container py-4">
        <div className="products-header d-flex justify-content-between align-items-center">
          <h3 className="products-title">📦 Products</h3>
          <Link to="/dashboard/addproduct" className="btn-add">
            Add Product
          </Link>
        </div>

        <p className="products-subtitle">
          Manage all <span>products</span> available in the store.
        </p>

        <div className="table-wrapper">
          <table className="products-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th>Category</th>
                <th>Price (Rs.)</th>
                <th>Description</th>
                <th>Ratings</th>
                {/* <th>Created</th>
                <th>Updated</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td className="text-truncate" style={{ maxWidth: "200px" }}>
                    {product.description || "—"}
                  </td>
                  <td>
                    {product.ratings && product.ratings.length > 0
                      ? `${product.ratings.length} review(s)`
                      : "No ratings"}
                  </td>
                  {/* <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td>{new Date(product.updatedAt).toLocaleDateString()}</td> */}
                  <td>
                    <Link
                      to={`/dashboard/updateproduct/${product._id}`}
                      className="btn-action edit"
                      state={product}
                    >
                      ✏️
                    </Link>
                    <button onClick={() => handleDelete(product._id)} className="btn-action delete">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
