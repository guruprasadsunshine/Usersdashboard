import React from "react";


function DashboardCard({data}){


    return (
        <div className="col-xl-3 col-md-6 mb-4" >
            <div className="Card dashboard-card" style={{borderLeft:`4px solid ${data.color}`}} >
<div className="card-body mt-2 mb-2" >
    <div className="row no-gutters align-items-center" >
        <div className="col mr-2" >
            <div className="small font-weight-bold text-uppercase mb-1 " style={{color:data.color}}> {data.title} </div>
            {data.progressbar ? (<div className="col" >
                <div className="progress ml-3 mr-3" style={{height:"0.5rem"}} >
                    <div className="progressbar-bar bg-info" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-aria-valuemin="0" aria-valuemax="100"> </div>
                </div>
            </div> ):""}

        </div>
    </div>
    <div c className={`fas ${data.icon}fa-2x`} style={{color:"#ccc"}} lassName="col-auto" >
        <i></i>
    </div>
</div>

            </div>
        </div>
    )
}

export default DashboardCard