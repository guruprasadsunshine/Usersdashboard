import React,{useContext,useState} from "react";
import {useNavigate} from 'react-router-dom';
import ProductContext from "./PoductContext"




 function Createproducts(){
    const {products , setproducts} = useContext(ProductContext)
    const [productName,setproductName]= useState("")
    const [productCompany,setproductCompany]= useState("")
    const [productType,setproductType] = useState("")
    const [availableform,setavailableform] =useState("")
    const [price,setprice] = useState("")
    let navigate = useNavigate()
    let handleSubmit= (e)=>{

        e.preventDefault()
        let object= {productName,productCompany, type:productType,availableform,price}
        setproducts([...products,object])
        navigate.push("./products")
    }
    return(
<div >
<h3 className="ml-3" >Create New products</h3>

<div className="container p-3" >
    <form onSubmit={handleSubmit}>
    <div className="row p-1" >
        <div className="col-lg-6" >
            <label>Product Name</label>
            <input type="text" value={productName} onClick={(e)=>{
                setproductName(e.target.value)
            }} classNameform-control />
        </div>
        <div className="col-lg-6" >
            <label>Product Company</label>
            <input type="text" value={productCompany} onChange={(e)=>{
                setproductCompany(e.target.value)
            }}  className="form-control" />
        </div>
    </div>
    <div className="row p-1" >
        <div className="col-lg-6" >
            <label>Product type</label>
            <input type="text" value={productType} onChange={(e)=>{
                setproductType(e.target.value)
            }}  className="form-control"  />
        </div>
<div className="col-lg-6" >
<label>available Form </label>
            <input type="text" value={availableform} onChange={(e)=>{
                setavailableform(e.target.value)
            }}  className="form-control"  />
</div>
    </div>
    <div className="row p-1 mb-4" >
        <div className="col-lg-6" >

        <label>available Form</label>
            <input type="number" value={price} onChange={(e)=>{
                setprice(e.target.value)
            }}  className="form-control"  />
        </div>
    </div>
<div className="row p-1 submitbtn" >
    <input type='submit' value="Submit" className="btn btn-promary" />
</div>
    </form>
</div>
</div>
    )
}

export default Createproducts