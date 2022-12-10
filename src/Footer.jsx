import { Facebook } from "@material-ui/icons";
import { Twitter } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Call } from "@mui/icons-material";
function Footer()
{
    return (
        <>
            <div className="w-full h-52 md:h-28 mt-10 ">
                <div className="w-full flex justify-center py-4" style={{ 'borderBottom': '1px solid black', 'borderTop': '1px solid black' }}>
                    <div className="flex w-96 justify-center">
                    <div className="flex justify-center"><h1 className="font-bold">Privacy Policy</h1> </div>
                    <div className="h-7 mx-4" style={{'width':'1px','backgroundColor':'black'}}></div>
                    <div className="flex justify-center"><h1 className="font-bold">T & C</h1> </div>
                    </div>
                    
                </div>
                <div className="w-full h-full items-center flex md:flex-row flex-col justify-around">
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
                    <h1 className="font-bold w-max text-center  md:my-0 my-2">Copyright © 2015 - 2022 Deccan Chronicle.<br/>
Designed, Developed & Maintained By Daksham</h1>
<div className="w-max  md:my-0 my-2">
                        <div className="w-max h-7 rounded-2xl px-4" style={{'border':'1px solid black'}}><Call className="text-black"  style={{'fontSize':'20px'}} />
                        +91 8766545544</div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    );

}
export default Footer;