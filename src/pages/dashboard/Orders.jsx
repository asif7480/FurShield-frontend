  import React from "react";
  import Layout from "../../components/dashboard/Layout";
  import "./Orders.css";

  export default function Orders() {
    const orders = [
      { id: 101, customer: "Basil Khan Rohela", product: "Dog Food", qty: 2, price: "$40", status: "Delivered" },
      { id: 102, customer: "Jawad", product: "Cat Toy", qty: 1, price: "$15", status: "Pending" },
      { id: 103, customer: "Zain", product: "Bird Cage", qty: 1, price: "$80", status: "Cancelled" },
      { id: 104, customer: "Walid", product: "Pet Shampoo", qty: 3, price: "$30", status: "Delivered" },
    ];

    return (
      <Layout>
        <div className="orders-page container py-4">
          <h3 className="orders-title">🛒 Orders</h3>
          <p className="orders-subtitle">
            Track and manage all <span>customer orders</span> here.
          </p>

          <div className="orders-card">
            <table className="orders-table table table-hover table-borderless align-middle">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id} className="fade-in">
                    <td data-label="#">{index + 1}</td>
                    <td data-label="Customer">{order.customer}</td>
                    <td data-label="Product">{order.product}</td>
                    <td data-label="Qty">{order.qty}</td>
                    <td data-label="Price">{order.price}</td>
                    <td data-label="Status">
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                    <td data-label="Actions" className="text-end">
                      <button className="btn-action view">👁️</button>
                      <button className="btn-action edit">✏️</button>
                      <button className="btn-action delete">🗑️</button>
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
