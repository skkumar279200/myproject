import React from "react";
import './App.css';
import SideBar from "./Components/SideBar Section/SideBar";
import Body from "./Components/Body Section/Body";


function App()
{
    return(
    <div className='container' style={{backgroundColor:'white'}}>
        <SideBar/>
        <Body/>
    </div>
    )
}
export default App;