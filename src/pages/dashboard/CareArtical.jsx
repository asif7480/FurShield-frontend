import React, { useEffect, useState } from "react";
import "./CareArtical.css";
import Layout from "../../components/dashboard/Layout";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

export default function CareArticle() {
  const { articles, getAllArticles, deleteArtile } = useGlobal()

  useEffect(() => {
    getAllArticles()
  }, [])

  console.log(articles);

  const handleDelete = async (id) => {
    try {
      const response = await deleteArtile(id)
      alert("Product has been deleted.")
    } catch (err) {
      console.log(err);
    } finally {
      getAllArticles()
    }
  }

  return (
    <Layout>
      <div className="pets-page container py-4">
        <div className="pets-header">
          <h3 className="pets-title">Care Articles</h3>
          <Link to="/dashboard/addpet" className="btn-add">
            Add Article
          </Link>
        </div>

        <p className="pets-subtitle">
          Manage all <span>articles</span> here.
        </p>

        <div className=" table-responsive">
          <table className="pets-table table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>title</th>
                <th>Category</th>
                <th>Content</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={article.id} className="fade-in">
                  <td>{index + 1}</td>
                  <td>{article.title}</td>
                  <td>{article.category}</td>
                  <td>{article.content} </td>
                  {/* <td>
                    {article.content.split(" ").slice(0, 15).join(" ")}...
                  </td> */}

                  <td className="text-center">
                    <Link
                      to={`/dashboard/updatepet/${article._id}`}
                      className="btn-action edit"
                      state={article}
                    >
                      ✏️
                    </Link>
                    <button onClick={() => handleDelete(article._id)} className="btn-action delete">🗑️</button>
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
