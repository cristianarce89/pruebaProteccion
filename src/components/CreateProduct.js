import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API = 'https://fakestoreapi.com/products'

const CreateProduct = () => {
    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()


    //procedimiento guardar

    const store = async (e) => {
        e.preventDefault();
        await axios.post(API, { image: image, title: title, price: price, description: description })
        navigate('/')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className='form-label'>Url Image</label>
                    <input
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className='form-label'>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CreateProduct;