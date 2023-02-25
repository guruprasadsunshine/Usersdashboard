import './App.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import {   Route , Routes} from "react-router-dom"
import Sidebar from './Sidebar';
import Dashboarddata from './Dashboarddata';
import Createproducts from './Createproduct';




function App() {
 




  return (
    <div className="App wrapper">
<Sidebar/>
<Createproducts/>
    </div>
  );
}

export default App;
