import React from "react";
import donate from './assets/donate.jpeg'
import { Facebook } from "@material-ui/icons";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
function Donate()
{
    return (
        <>
        <div className="w-full md:mt-10 mt-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-10">
                       Donate
                    </h1>
                <div className="w-4/5 h-max px-5 related py-5 flex justify-center flex-col items-center" >
                    
                    <h1 className="text-2xl font-semibold capitalize">
                    Mahendra Daiman
                    </h1>
                    <img src={donate} className="my-6 w-40" alt="" />
                    
                    <div className="w-max md:my-0 my-2">
                        <a className="mx-2" href="https://www.facebook.com/mahendra.daiman?mibextid=LQQJ4d">
                            <Facebook className="text-black" style={{'fontSize':'40px'}} />
                        </a>
                        <a className="mx-2" href="https://www.instagram.com/mahendradaiman/">
                            <Instagram className="text-black"  style={{'fontSize':'40px'}} />
                        </a>
                        <a className="mx-2" href="https://twitter.com/mahendradaiman">
                            <Twitter className="text-black"  style={{'fontSize':'40px'}} />
                        </a>
                        <a  className="mx-2" href="https://in.linkedin.com/in/mahendra-daiman-896131103?original_referer=https%3A%2F%2Fwww.google.com%2F">
                            <LinkedIn className="text-black"  style={{'fontSize':'40px'}} />
                        </a>

                        
                    </div>
                    <h1 className="text-base font-semibold mt-6 px-5 text-center">
                    Name : Mahendra Daiman<br/>
Account No. :50100128528342<br/>
IFSC Code : HDFC0004318<br/>
Bank Name : HDFC Bank<br/>

                    </h1>
                    <h1 className="text-2xl mt-5 font-semibold">
                    Donate for social causes
                    </h1>
                </div>

            </div>
        </>
    );
}

export default Donate;