import React, { useState } from "react";
import { useContext,useNavigate } from "react-router";
import UserContext from './UsersContext';



function CreateUser(){
    const [userName,setuserName]= useState("")
    const [position,setposition]= useState()
    const [office,setoffice]=useState("")
    const [age,setage]=useState("")
const [startdate,setstartdate] = useState("")
const [salary,setsalary]=useState("")
const [userdata,setuserdata]=useContext(UserContext);
const navigate = useNavigate();
let handlesubmit=(e)=>{
    e.preventDefault();
    let objectvalue= {userName,position,office,
        age,startdate,salary}
        setuserdata([...userdata, objectvalue])
        navigate.push("/users")
}
return(
    <div>
        <h3 className="ml- mb-4" >Create User</h3>
        <div className="container" >
            <form className="p-2" onSubmit={handlesubmit}>
<div className="row mb-3">
    <div className="col-lg-6" >
        <label>u=UserName</label>
        <input type="text" value={userName} onClick={(g)=>{
            setuserName(g.target.value)
        }}/>
    </div>

    <div className="col-lg-6" >
        <label>position</label>
        <input type="text" value={position} onClick={(g)=>{
            setposition(g.target.value)
        }}/>
    </div>

    <div className="col-lg-6" >
        <label>office</label>
        <input type="text" value={office} onClick={(g)=>{
            setoffice(g.target.value)
        }}/>
    </div>


    <div className="col-lg-6" >
        <label>Age</label>
        <input type="number" value={age} onClick={(g)=>{
            setage(g.target.value)
        }}/>
    </div>


    <div className="col-lg-6" >
        <label>startdate</label>
        <input type="date" value={startdate} onClick={(g)=>{
            setstartdate(g.target.value)
        }}/>
    </div>


    <div className="col-lg-6" >
        <label>salary</label>
        <input type="number" value={salary} onClick={(g)=>{
            setsalary(g.target.value)
        }}/>
    </div>
    <div className="row mt-3" >
        <div className="submitbtn" >
            <input type="submit" value="create" className="btn submitbtnn btn-primary " />
        </div>
    </div>
</div>
            </form>
        </div>
    </div>
)


}