import React from "react";




function Dashboarddata () {
    const data =  [{

    title:"salary",
    amount:"$20,000",
    color:"green"
},
{

    title:"salary",
    amount:"$20,000",
    color:"green"
},
{

    title:"salary",
    amount:"$20,000",
    color:"green"
},
{

    title:"salary",
    amount:"$20,000",
    color:"green"
},
{

    title:"salary",
    amount:"$20,000",
    color:"green"
}

]

return(
    <div className="container-fluid" >
<h3>Dashboard</h3>
<div className="row" >
{data.map((m,i)=>{
return <Dashboard key={i} data={m} />
})}
</div>
<div className="row" >
<Graph/>
</div>
<div className="row" >
    <div  className="col-lg- mb-4">
<Illustration/>
    </div>
</div>
</div>
)
}




export default Dashboarddata

