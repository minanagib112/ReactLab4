import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { useParams , Link } from 'react-router-dom'
export default function ProductDetails() {
    const {id} = useParams()
    console.log(id);
    let [product , setProduct] = useState({})
    let GetProductById=()=>{
        axios.get(`http://localhost:2000/products/${id}`)
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        GetProductById()   
    },[])
  return (
        <>
        <h1 className='text-center mt-5'>Product Details</h1>
        <div className='d-flex justify-content-center mt-5'>
        <div className="card d-flex" style={{width: '700px'}}>
                <img src={product.imgUrl} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.quantity}</p>
                        <p className="card-text">{product.price}</p>
                        <Link to="/" className="btn btn-dark">Go to Products</Link>
                    </div>
                </div>
            </div>
        </>
        )
}
