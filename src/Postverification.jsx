import './Css/homepage.css';
import postveri from './assets/postveri.jpeg';
function Postverification() {
    return (
        <>
            <div className="w-full md:mt-20 mt-4 flex items-center justify-center">
                <div className="w-4/5 h-max px-5 related py-5 flex justify-center flex-col items-center" >
                    <h1 className="text-2xl font-bold">
                        Verification Successfull
                    </h1>
                    <img src={postveri}  className="my-6 w-48" alt="" />
                    <h1 className="text-base font-semibold px-5 text-center">
                    Your problem has been registered. We will contact you soon.
                    </h1>
                    
                </div>

            </div>
        </>
    );
}

export default Postverification;