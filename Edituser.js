import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";



function Edituser(props){
const {userData,setUserData} =useContext(UserContext)
console.log(props)

const user = userData[props.match.params.id -1]
const [userName, setUserName] = useState(user.userName);
const [position, setPosition] = useState(user.position);
const [office, setOffice] = useState(user.office);
const [age, setAge] = useState(user.age);
const [startDate, setStartDate] = useState(user.startDate);
const [salary, setSalary] = useState(user.salary);
const history = useNavigate();
let handlesubmit = (e) => {
    e.preventDefault();
    let objvalues = { userName, position, office, age, startDate, salary };
    userData[props.match.params.id - 1] = objvalues;
    setUserData([...userData]);
    history.push('/users')
}


return (
    <div>
        <h3 className="ml-3">Edit Existing user</h3>
        <div  className="container" >
<form className="p-2" onSubmit={handlesubmit} >
<div className="row mb-3" >
<div className="col-lg-6" >
    <label>UserName</label>
    <input type="text" value={userName} onChange={(n)=>setUserName(n.target.value)} />
</div>

<div className="col-lg-6" >
    <label>position</label>
    <input type="text" value={position} onChange={(n)=>setPosition(n.target.value)}/>
</div>


<div className="col-lg-6" >
    <label>position</label>
    <input type="text" value={office} onChange={(n)=>setOffice(n.target.value)}/>
</div>

<div className="col-lg-6" >
    <label>position</label>
    <input type="number" value={Age} onChange={(n)=>setAge(n.target.value)}/>
</div>

<div className="col-lg-6" >
    <label>position</label>
    <input type="number" value={salary} onChange={(n)=>setSalary(n.target.value)}/>
</div>



<div className="col-lg-6" >
    <label>position</label>
    <input type="number" value={startDate} onChange={(n)=>setStartDate(n.target.value)}/>
</div>
</div>
<div className="row" >
    <div className="submitbtn" >
        <input type="submit" value="Update" className="btn submitbtnn btn-primary" />
    </div>
</div>
</form>
        </div>
    </div>
)


}

export default Edituser
















