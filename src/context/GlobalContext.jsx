import React, { createContext, useEffect, useState, useContext } from "react";
import axiosInstance from "../axios/axiosInstance";

export const GlobalContext = createContext(null)

export const GlobalContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [pets, setPets] = useState([])
    const [appointments, setAppointments] = useState([])
    const [ownerAppointments, setOwnerAppointments] = useState([])
    const [vetAppointments, setVetAppointments] = useState([])
    const [articles, setArticles] = useState([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const getAllProducts = async () => {
        try {
            const response = await axiosInstance.get(`/products`)
            const { data: { message, success, data } } = response
            setProducts(data)
            return { message, data }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const createProduct = async (data) => {
        try {
            const response = await axiosInstance.post("/products", data)
            return response

        } catch (err) {
            console.log(err);
        }
    }

    const updateProduct = async (id, data) => {
        try {
            const response = await axiosInstance.put(`/products/${id}`, data)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    const deleteProduct = async (id) => {
        try {
            const response = await axiosInstance.delete(`/products/${id}`)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    const getAllPets = async () => {
        try {
            const response = await axiosInstance.get(`/pets`)
            console.log(response);

            const { data: { message, success, data } } = response
            setPets(data)
            console.log(pets);

            return { message, data }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const createPet = async (data) => {
        try {
            const response = await axiosInstance.post("/pets", data)
            return response

        } catch (err) {
            console.log(err);
        }
    }

    const updatePet = async (id, data) => {
        try {
            const response = await axiosInstance.put(`/pets/${id}`, data)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    const deletePet = async (id) => {
        try {
            const response = await axiosInstance.delete(`/pets/${id}`)
            return response
        } catch (err) {
            console.log(err);
        }
    }

    const getAllAppointments = async () => {
        try {
            const response = await axiosInstance.get("/appointments")
            console.log(response);
            const { data: { message, success, data } } = response
            setAppointments(data)            
            // console.log(data);


            return { message, data }
        } catch (err) {
            console.log(err)
        }
    }

    const getOwnerAppointments = async () => {
        try {
            const response = await axiosInstance.get(`/appointments/owner`)
            const { data: { message, success, data } } = response
            setOwnerAppointments(data)
            return { message, data }

        } catch (err) {
            console.log(err);
        }
    }

    const getVetAppointments = async () => {
        try {
            const response = await axiosInstance.get(`/appointments/vet`)
            const { data: { message, success, data } } = response
            setVetAppointments(data)
            return { message, data }
        } catch (err) {
            console.log(err);
        }
    }

    const deleteAppointment = async (id) => {
        try {
            const response = await axiosInstance.delete(`/appointments/${id}`)
            return response
        } catch (err) {
            console.log(err)
        }
    }


    const getAllArticles = async () => {
        try {
            const response = await axiosInstance.get("/articles")
            const { data: { message, success, data } } = response
            setArticles(data)
            return { message, data }
        } catch (err) {
            console.log(err)
        }
    }

    const createArticles = async () => {
        try {
            const response = await axiosInstance.get("/articles")
            const { data: { message, success, data } } = response
            setArticles(data)
            return { message, data }
        } catch (err) {
            console.log(err)
        }
    }

    const updateArticle = async () => {
        try {
            const response = await axiosInstance.get("/articles")
            const { data: { message, success, data } } = response
            setArticles(data)
            console.log(articles);

            return { message, data }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteArticle = async () => {
        try {
            const response = await axiosInstance.get("/articles")
            const { data: { message, success, data } } = response
            setArticles(data)
            return { message, data }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <GlobalContext.Provider value={{
            products, setProducts, pets, setPets, ownerAppointments, setOwnerAppointments, vetAppointments, setVetAppointments, appointments, setAppointments, articles, setArticles, loading, setLoading, error, setError,
            getAllProducts, createProduct, updateProduct, deleteProduct, getAllPets, createPet, updatePet, deletePet, getOwnerAppointments, getVetAppointments, deleteAppointment, getAllAppointments, getAllArticles, createArticles, updateArticle, deleteArticle
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)