import React from 'react'
import { useState ,useCallback,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function EditProduct() {
    const navigate = useNavigate();
    const {id} = useParams()
    let [product,setProduct] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });
    let GetById=()=>{
        axios.get(`http://localhost:2000/products/${id}`)
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err))  
        
    }
    useEffect(()=>{
        GetById(id)
    },[])
    let EditProduct = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:2000/products/${id}`,product)
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err))
        navigate('/')
    }
    let HandleChange =useCallback((e)=>{
        console.log(e)
        const {name,value} = e.target;
        setProduct((old)=>({
            ...old,
            [name] : value
        }))
    })
  return (
    <>
   <div>
            <h1>Edit Product</h1>
            <form action="" onSubmit={EditProduct}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name" name="name" value={product.name} onChange={HandleChange}/>
                    <label for="floatingInput">Product Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Image" name="imgUrl" value={product.imgUrl} onChange={HandleChange}/>
                    <label for="floatingInput">Product Image</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Price" name="price" value={product.price} onChange={HandleChange}/>
                    <label for="floatingInput">Product Price</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Quantity" name="quantity" value={product.quantity} onChange={HandleChange}/>
                    <label for="floatingInput">Product Quantity</label>
                </div>
                <button className="btn btn-dark">Submit</button>
            </form>

        </div>    </>
  )
}
