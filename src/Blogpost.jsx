import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Css/homepage.css';
import { useLocation } from 'react-router-dom';
import paper from './assets/paper.png';
function Blogpost() {
    const location = useLocation();
    return (
        <>
            <div className="w-full px-5 lg:px-10 md:mt-10 mt-4 flex flex-col items-start    ">
                <h1 className="text-2xl pr-2 font-bold">
                    {location.state.title}
                </h1>
                <p className="text-sm font-medium text-black mt-5 mb-5 w-4/5">{location.state.subtitle}.</p>
                <h1 className="text-black font-semibold text-base w-full ">Published on: {location.state.date}</h1>
                <img className="w-full lg:w-4/5 mt-5 " src={location.state.images[0]} alt="" />
                <div className="w-max px-5 py-2" style={{ 'backgroundColor': '#D9D9D9' }}>

                    <h1 className="text-black mx-auto w-max font-semibold">{location.state.caption}</h1>
                </div>
                <p className="text-sm font-medium text-black mt-5 mb-5 w-full lg:w-4/5">{location.state.desc}</p>
                
                <div className='flex md:hidden w-screen'>
                    <OwlCarousel items={2} className="owl-theme overflow-x-hidden w-screen flex justify-around flex-col" autoplay={true} loop margin={30} dots="false">
                        {location.state.images.map((image, index) => {
                            return <div className='h-max w-full flex flex-col justify-center items-center item'>

                                <img src={image} className='w-24 h-48  relative top-2 right-2' alt="" />


                            </div>
                        })}





                    </OwlCarousel>
                </div>
                <div className='hidden md:flex w-full'>
                    <OwlCarousel items={5} className="owl-theme overflow-x-hidden flex justify-around flex-col" autoplay={true} loop margin={30} dots="false">
                        {location.state.images.map((image, index) => {
                            return <div className='h-max w-full flex flex-col justify-center items-center item'>

                                <img src={image} className='w-24 h-48  relative top-2 right-2' alt="" />


                            </div>
                        })}





                    </OwlCarousel>
                </div>





                <h1 style={{ 'borderLeft': '8px solid black' }} className='text-2xl font-bold text-black px-3 mb-5'>Related Blog</h1>
                <div className='hidden md:flex w-full'>
                <OwlCarousel items={4} className="owl-theme overflow-x-hidden flex justify-around flex-col" autoplay={true} loop margin={30} dots="false">

                        <div className='h-max w-full flex flex-col justify-center items-center item'>
                            <div className='' style={{ 'border': '1px solid black' }}>
                                <img src={paper} className='w-24 h-36' alt="" />
                                <h1 className='text-sm font-semibold mt-3 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quasi.</h1>
                                <h1 className='text-xs font-semibold mt-3 p-2'>31:01:2022</h1>
                            </div>

                        </div>
                        




                    </OwlCarousel>
                </div>
                <div className='flex md:hidden w-full'>
                    <OwlCarousel items={2} className="owl-theme w-full flex justify-around flex-col" autoplay={true} loop margin={30} dots="false">

                        <div className='h-max w-full flex flex-col justify-center items-center item'>
                            <div className='' style={{ 'border': '1px solid black' }}>
                                <img src={paper} className='w-24 h-36' alt="" />
                                <h1 className='text-sm font-semibold mt-3 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quasi.</h1>
                                <h1 className='text-xs font-semibold mt-3 p-2'>31:01:2022</h1>
                            </div>

                        </div>




                    </OwlCarousel>
                </div>
            </div>
        </>
    );
}

export default Blogpost;