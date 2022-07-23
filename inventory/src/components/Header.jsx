import React from "react";
import Navbar from "./Navbar";
const Header = () => {
    return (
        <div className="container-fluid px-0">
            <Navbar />
            <div className="container text-center ">
                <h1 className="my-4">Welcome to the Inventory portal</h1>
            </div>
        </div>
    )
}
export default Header