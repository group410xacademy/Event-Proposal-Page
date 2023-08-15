import { Outlet } from "react-router-dom";

export default function User(){
    return <>
       <nav className="w-100 border d-flex justify-content-between">
        <div>
            <span style={{color:"blue"}}>LOGO</span>
        </div>
        <div className="d-flex flex-row align-items-center">
        <h6 className="mx-2">username</h6>
        <img className="img-thumbnail rounded-circle" style={{width:"50px"}} src="https://pixabay.com/get/g8708fde4c1bc86e981c307ad66e3ef48b1bd9c189149f94b5414f00ed79643b4bc99d5e643d9a8d5c2788566e51218b74dccd1164438665df2c598b38bfcaa56_1280.jpg"/>
        </div>
        </nav>
        <Outlet/>
    </>
}