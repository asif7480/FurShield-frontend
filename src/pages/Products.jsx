import './Products.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axiosInstance from '../axios/axiosInstance';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products"); // 👈 adjust route if needed
        if (res.data.success) {
          setProducts(res.data.data || []); // assuming { success, data }
        } else {
          setError(res.data.message || "Failed to fetch products");
        }
      } catch (err) {
        console.error("Fetch products error:", err);
        setError("Something went wrong while fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="products-page container-lg py-5 text-center">
          <p>Loading products...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="products-page container-lg py-5 text-center">
          <p className="text-danger">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="products-page container-lg py-5">
        <div className="products-header text-center mb-5">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Explore the best items for your furry and feathered friends
          </p>
        </div>

        <div className="row g-4">
          {products.length > 0 ? (
            products.map((p) => (
              <div key={p._id} className="col-6 col-md-4 col-lg-3">
                <ProductCard product={p} />
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p className="no-products">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
