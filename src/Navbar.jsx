import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import { Menu } from "@mui/icons-material";
import { Box } from "@mui/material";
import logo from './assets/logo.png';
function Navbar() {


    const [state, setState] = useState({
        // top: false,
        left: false,
        // bottom: false,
        // right: false,
    });
    const list = (anchor) => (
        <Box className="p-3 h-full overflow-hidden" style={{ 'backgroundColor': 'black' }}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
        >




            <ul className="flex flex-col items-end">
                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                    <Link className="no-underline text-white mx-2 font-semibold" to="/">Home</Link>
                    </Box>
                </li>

                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                    <Link className="no-underline text-white mx-2 font-semibold" to="/blogs">Blog</Link>
                    </Box>
                </li>

                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                    <Link className="no-underline text-white mx-2 font-semibold" to="/form">Form</Link>
                    </Box>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                <Link className="no-underline text-white mx-2 font-semibold" to="/faq">FAQ</Link>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                    <Link className="no-underline text-white mx-2 font-semibold" to="/about">About Us</Link>
                    </Box>
                </li>
                <li className="w-56 py-2 px-2 rounded" >
                    <Box onClick={toggleDrawer(anchor, false)}>
                    <Link className="no-underline text-white mx-2 font-semibold" to="/Donate">Donate</Link>
                    </Box>
                </li>
                
            </ul>
        </Box>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <>

            <div className="md:hidden block">
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        {/* <Button className='text-white mx-5 text-left w-20' onClick={toggleDrawer(anchor, true)}>Filters</Button> */}
                        <div className='md:hidden lg:hidden xl:hidden w-full flex justify-between 2xl:hidden' onClick={toggleDrawer(anchor, true)}> <Menu className='text-black mx-5 mt-3' /><img src={logo} className="w-40 mx-auto relative right-4"></img></div>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
            <div className="hidden md:flex w-full items-center border" style={{ 'borderBottom': '1px solid black' }}>
                
                <ul className="flex py-8 px-2 justify-center w-max">
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/">Home</Link></li>
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/blogs">Blog</Link></li>
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/form">Form</Link></li>
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/faq">FAQ</Link></li>
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/about">About Us</Link></li>
                    <li><Link className="no-underline text-black mx-3 font-semibold" to="/Donate">Donate</Link></li>
                </ul>
                <img src={logo} style={{'position':'absolute','left':'35%'}} className="w-48 mb-1 mx-20" alt="" />

            </div>





        </>
    );
}

export default Navbar;