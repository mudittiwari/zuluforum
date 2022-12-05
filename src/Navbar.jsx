import React from "react";
import { Link } from "react-router-dom";

function Navbar()
{
    return (
        <>
            <div className="w-full flex items-center border" style={{'borderBottom':'1px solid black'}}>
            <div className="bg-black w-20 h-10 mx-8 my-8 absolute rounded-3xl text-center text-white">LOGO</div>
                <ul className="flex py-8 px-8 justify-center w-full">
                    <li><Link className="no-underline text-black mx-4 font-semibold" to="/">Home</Link></li>
                    <li><Link className="no-underline text-black mx-4 font-semibold" to="/blogs">Blog</Link></li>
                    <li><Link className="no-underline text-black mx-4 font-semibold" to="/form">Form</Link></li>
                    <li><Link className="no-underline text-black mx-4 font-semibold" to="/faq">FAQ</Link></li>
                    <li><Link className="no-underline text-black mx-4 font-semibold" to="/about">About Us</Link></li>
                </ul>
                
            </div>
        </>
    );
}

export default Navbar;