import axios from 'axios'

const API = 'https://fakestoreapi.com/products'

const getProducts = async () => {
    const res = await axios.get(API)
    return(res.data)
}

export default getProducts