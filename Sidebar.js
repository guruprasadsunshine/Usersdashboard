import { Link } from "react-router-dom";


export default function Sidebar(){


    return (
<ul className="navbar-nav bg-gradient-primary sidebar-dark according " id="accordingSidebar" > 
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
<div className="sidebar-brand-icon" >
    <i className="fas fa-laugh-wink" ></i>
</div>
<div className="sidebar-brand-text mx-3" >SB Admin</div>
</a>
<hr className="sidebar-divider my-0"/>

{/* <li className="nav-item" >
    <Link className="nav-link" to="/">
    <i className="fas fa-fw fa-tachometer-alt" ></i>
    <span>Dashboard</span></Link>
</li> */}

  <span>Dashboard</span>
<hr className="sidebar-divider my-0" />


<div className="sidebar-heading text-uppercase" >
    Information
</div>
<hr className="sidebar-divider my-0" />
<li className="nav-item" >
     <li className="fas fa-fw fa-user" ></li>
    <span>Users</span>
    <hr className="sidebar-divider my-0" />
</li>

<li className="nav-item" >
{/* <Link className="nav-link" to="/product"> */}
    <i className="fas fs-fw fa-mobile" ></i>
    <span>Product</span>
 {/* </Link> */}
</li>
<hr className="sidebar-divider my-0" />
</ul>


    )
}