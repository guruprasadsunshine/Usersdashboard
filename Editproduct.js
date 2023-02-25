import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import ProductContext from "./ProductContext";



function Editproduct(props){
const {products,setProducts} =useContext(ProductContext)
let product = products[props.match.params.id -1];

const [productName,setproductName] = useState(product.productName)
const [productCompany,setproductCompany]= useState(product.productCompany)
const [productType,setproductType] = useState(product.Type)
const [availableform,setavailableform] = useState(product.availableform)
const [price,setprice]=useState(product.price)
let navigate= useNavigate();

let handleSubmit =(e)=>{
e.prevent.Default();
    let object = {productName,productCompany,type:productType,availableform,price}
    products[props.match.params.id -1]= object
    setProducts([...products])
}

return(
    <div className="ml-3" >
    <h3>  Edit Existing Product </h3>

<div className="container" >
    <form onSubmit={handleSubmit} className="p-2" >
<div className="row p-1" >
    <div className="col-lg-6" >
        <label>Product Name</label>
        <input type="text" value={productName}  onChange={(e)=>{
setproductName(e.target.value)
        }} className="form-control" />
    </div>

    <div className="col-lg-6" >
        <label>Product Type</label>
        <input type="text" value={productType}  onChange={(e)=>{
setproductType(e.target.value)
        }} className="form-control" />
    </div>



    <div className="col-lg-6" >
        <label>Product Company</label>
        <input type="text" value={productCompany}  onChange={(e)=>{
setproductCompany(e.target.value)
        }} className="form-control" />
    </div>



    <div className="col-lg-6" >
        <label>Product Availableform</label>
        <input type="text" value={availableform}  onChange={(e)=>{
setavailableform(e.target.value)
        }} className="form-control" />
    </div>

    <div className="col-lg-6" >
        <label>Product Price</label>
        <input type="number" value={price}  onChange={(e)=>{
setprice(e.target.value)
        }} className="form-control" />
    </div>
</div>

<div>
    <div>
        <input type="submit" value="Update"  className="btn btn-primary" />
    </div>
</div>
    </form>
</div>


    </div>
)

}

export default Editproduct