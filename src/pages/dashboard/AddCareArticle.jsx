import React, { useState } from 'react'
import { useGlobal } from '../../context/GlobalContext'
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/dashboard/Layout';

function AddCareArticle() {
    const { loading, createArticle } = useGlobal()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()

    const [form, setForm] = useState({
        title: "",
        category: "",
        content: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {

            const formData = new FormData();
            formData.append("title", form.title);
            formData.append("category", form.category);
            formData.append("content", form.content);


            const response = await createArticle(formData)
            console.log(response);
            alert("Product Added Successfully");
            navigate(`/dashboard/careartical`)
        } catch (err) {
            console.log(err);
        } finally {
            setIsSubmitting(false)
        }

    };
    return (
        <Layout>
            <div className="container py-4">
                <h3 className="page-title">➕ Add Care Article</h3>
                <div className="d-flex justify-content-center">
                    <Link to={`/dashboard/careartical`} className="btn btn-primary">View All Articles</Link>
                </div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="form-control"
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />
                    <textarea 
                        className='form-control'
                        name="content" 
                        placeholder='Content' 
                        value={form.content} 
                        rows={6}
                        onChange={handleChange} 
                        required
                    >

                        </textarea>
                    
                    <button type="submit" className="btn btn-primary">
                        {isSubmitting ? "Adding..." : `Add Product`}
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default AddCareArticle