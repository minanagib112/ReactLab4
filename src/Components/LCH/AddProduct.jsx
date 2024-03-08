import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const AddProduct = () => {
    const navigate = useNavigate();
    let [product,setProduct] = useState({
        name:'',
        price:0,
        quantity:0,
        imgUrl:'https://source.unsplash.com/random'
    });
    let HandleChange =useCallback((e)=>{
        console.log(e)
        const {name,value} = e.target;
        setProduct((old)=>({
            ...old,
            [name] : value
        }))
    })
    let AddProduct = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:2000/products",product)
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
            navigate('/')
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Add Product</h1>
            <form action="" onSubmit={AddProduct}>
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

        </div>
    );
};

export default AddProduct;