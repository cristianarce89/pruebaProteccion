import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import getProducts from '../services/request'
import axios from 'axios'
import './ShowProducts.css'

const API = 'https://fakestoreapi.com/products'

const ShowProducts = () => {

    // const [products, setProducts] = useState([])
    // const requestGetProducts = async () => {
    //     try {
    //         const products = await getProducts()
    //         setProducts(products)
    //     } catch (error) {
    //      console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     requestGetProducts()
    // }, [])

    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])


    // procedimiento para mostrar todos los products
    const getProducts = async () => {
        const res = await axios.get(API)
        setProducts(res.data)
    }

    // procedimiento para eliminar un product
    const deleteProduct = async (id) => {
        await axios.delete(`${API}${id}`)
        getProducts()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    {/* <Link to={'/create'} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link> */}
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Product</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>                                
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td> { <img alt="imagenes" className="image__product" src={product.image} />}</td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>                             
                                    <td>
                                        <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShowProducts;