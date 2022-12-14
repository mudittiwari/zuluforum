import React from 'react'
import Navbar from './Navbar';
import Carousel from 'react-material-ui-carousel';
import './Css/homepage.css';
import figure from './assets/figure.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import homepageimage from './assets/homepage.jpeg'
import homepageimagetop from './assets/homepagetop.jpeg'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import paper from './assets/paper.png';
import { Cancel } from '@material-ui/icons';
import cutting1 from './Daiman Website/1.jpg';
import cutting2 from './Daiman Website/2.jpg';
import cutting3 from './Daiman Website/3.jpg';
import cutting4 from './Daiman Website/4.jpg';
import cutting5 from './Daiman Website/5.jpg';
import cutting6 from './Daiman Website/6.jpg';
import cutting7 from './Daiman Website/7.jpg';
import cutting8 from './Daiman Website/8.jpg';
import cutting9 from './Daiman Website/9.jpg';
import cutting10 from './Daiman Website/10.jpg';
import cutting11 from './Daiman Website/11.jpg';
import cutting12 from './Daiman Website/12.jpg';
import cutting13 from './Daiman Website/13.jpg';
import cutting14 from './Daiman Website/14.jpg';
import cutting15 from './Daiman Website/15.jpg';
import cutting16 from './Daiman Website/16.jpg';
import cutting17 from './Daiman Website/17.jpg';
import cutting18 from './Daiman Website/18.jpg';
import cutting19 from './Daiman Website/19.jpg';
import cutting20 from './Daiman Website/20.jpg';
import cutting21 from './Daiman Website/21.jpg';


function modal(itemindex, image,setmodal) {
  return (
    <>
      {itemindex == true ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative flex justify-end flex-col items-end w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <Cancel className='cursor-pointer' style={{'fontSize':'30px'}} onClick={() => setmodal(false)}/>
              <img className='w-96' src={image} alt="" />
              
            </div>
          </div>
         
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


function Item() {
  return (
    // <Paper style={{'borderRadius':'0px !important'}}>
    <div>
      <img src={homepageimagetop} className="w-full" alt="..." />
    </div>
    // </Paper>
  )
}
const Homepage = (props) => {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);
  const [showModal9, setShowModal9] = React.useState(false);
  const [showModal10, setShowModal10] = React.useState(false);
  const [showModal11, setShowModal11] = React.useState(false);
  const [showModal12, setShowModal12] = React.useState(false);
  const [showModal13, setShowModal13] = React.useState(false);
  const [showModal14, setShowModal14] = React.useState(false);
  const [showModal15, setShowModal15] = React.useState(false);
  const [showModal16, setShowModal16] = React.useState(false);
  const [showModal17, setShowModal17] = React.useState(false);
  const [showModal18, setShowModal18] = React.useState(false);
  const [showModal19, setShowModal19] = React.useState(false);
  const [showModal20, setShowModal20] = React.useState(false);
  const [showModal21, setShowModal21] = React.useState(false);
  return (
    <div>
      {modal(showModal1, cutting1,setShowModal1)}
      {modal(showModal2, cutting2,setShowModal2)}
      {modal(showModal3, cutting3,setShowModal3)}
      {modal(showModal4, cutting4,setShowModal4)}
      {modal(showModal5, cutting5,setShowModal5)}
      {modal(showModal6, cutting6,setShowModal6)}
      {modal(showModal7, cutting7,setShowModal7)}
      {modal(showModal8, cutting8,setShowModal8)}
      {modal(showModal9, cutting9,setShowModal9)}
      {modal(showModal10, cutting10,setShowModal10)}
      {modal(showModal11, cutting11,setShowModal11)}
      {modal(showModal12, cutting12,setShowModal12)}
      {modal(showModal13, cutting13,setShowModal3)}
      {modal(showModal14, cutting14,setShowModal4)}
      {modal(showModal15, cutting15,setShowModal5)}
      {modal(showModal16, cutting16,setShowModal6)}
      {modal(showModal17, cutting17,setShowModal7)}
      {modal(showModal18, cutting18,setShowModal8)}
      {modal(showModal19, cutting19,setShowModal19)}
      {modal(showModal20, cutting20,setShowModal20)}
      {modal(showModal21, cutting21,setShowModal21)}
      <div className='md:my-14 my-4'>
        <Carousel navButtonsAlwaysInvisible="true" animation='slide' duration="800">

          <Item />
          {/* <Item />
          <Item /> */}

        </Carousel>
        <div className='w-full h-72 bg-white py-8 my-8' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='h-full w-full bg-black flex items-center justify-evenly'>
            <div className='w-max h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-3xl'>cases solved</h1>
            </div>
            <div className='w-max h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-3xl'>cases solved</h1>
            </div>
            <div className='w-max h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-3xl'>cases solved</h1>
            </div>
          </div>
        </div>
        <div className='w-full h-max justify-center lg:h-72 xl:h-72 2xl:h-72 flex flex-col lg:flex-row sm:flex-col md:flex-col items-center mt-5 lg:mt-20'>
          <div className='w-full items-center justify-center lg:w-1/2 xl:w-1/2 2xl:w-1/2 py-8 px-8 lg:p-14 flex flex-col'>
            <img src={homepageimage} className="w-80" alt="..." />
            <h1 className='font-semibold mt-3 text-center'>Mr. Mahendra Daiman</h1>
            <h1 className='font-semibold text-sm  text-center'>Councillor NP, Bandikui</h1>
          </div>
          <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 py-0 px-8 lg:p-14 '>
            <p className='text-sm font-medium mb-10'>
              Service is the aim, Sahayang is our awareness campaign mission under the resolution, whose work is to make the general public aware of their rights, rights and education, unemployment. With this, our main objective is to help and cooperate with people in our mission.<br />
              Mission Madad, an awareness campaign which has been supported by Mahendra Daiman and his associates over the years. The general public is deprived of basic needs and infrastructure including water, electricity, roads, employment, education and social development has been the main objective to make those needs self-sufficient.<br />
              Our awareness campaign mission is to meet the needs of the citizens and help them in their personal, family, financial and the aim is to make self-reliant to fulfill the social obligations.<br />
              Our mission in this awareness campaign is to make every common citizen self-reliant in social awareness and empathy and to make the labor and rural population financially and socially strong.
            </p>
          </div>
        </div>
        <div className='hidden w-full h-96 bg-white pt-8 my-8 mt-20 px-8 md:flex' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='flex w-full items-center'>
            <OwlCarousel items={3} className="owl-theme w-full flex justify-around flex-col" autoplay={false} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { console.log("mudit tiwari"); setShowModal1(true); modal(showModal1, cutting1) }} src={cutting1} className='w-24 h-48  relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal2(true); modal(showModal2, cutting2) }} src={cutting2} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal3(true); modal(showModal3, cutting3) }} src={cutting3} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal4(true); modal(showModal4, cutting4) }} src={cutting4} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal5(true); modal(showModal5, cutting5) }} src={cutting5} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal6(true); modal(showModal6, cutting6) }} src={cutting6} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal7(true); modal(showModal7, cutting7) }} src={cutting7} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal8(true); modal(showModal8, cutting8) }} src={cutting8} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>


              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal9(true); modal(showModal9, cutting9) }} src={cutting9} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal11(true); modal(showModal11, cutting10) }} src={cutting10} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal11(true); modal(showModal11, cutting11) }} src={cutting11} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal12(true); modal(showModal12, cutting12) }} src={cutting12} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>


              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal13(true); modal(showModal13, cutting13) }} src={cutting13} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal14(true); modal(showModal14, cutting14) }} src={cutting14} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal15(true); modal(showModal15, cutting15) }} src={cutting15} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal16(true); modal(showModal16, cutting16) }} src={cutting16} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal17(true); modal(showModal17, cutting17) }} src={cutting17} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal18(true); modal(showModal18, cutting18) }} src={cutting18} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal19(true); modal(showModal19, cutting19) }} src={cutting19} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal20(true); modal(showModal20, cutting20) }} src={cutting20} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal21(true); modal(showModal21, cutting21) }} src={cutting21} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>




        <div className=' w-full h-96 bg-white pt-8 my-8 mt-20 px-8 flex md:hidden' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='flex w-full items-center'>
            <OwlCarousel items={1} className="owl-theme w-full flex justify-around flex-col" autoplay={false} loop margin={100}>

            <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { console.log("mudit tiwari"); setShowModal1(true); modal(showModal1, cutting1) }} src={cutting1} className='w-24 h-48  relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal2(true); modal(showModal2, cutting2) }} src={cutting2} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal3(true); modal(showModal3, cutting3) }} src={cutting3} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal4(true); modal(showModal4, cutting4) }} src={cutting4} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal5(true); modal(showModal5, cutting5) }} src={cutting5} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal6(true); modal(showModal6, cutting6) }} src={cutting6} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal7(true); modal(showModal7, cutting7) }} src={cutting7} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal8(true); modal(showModal8, cutting8) }} src={cutting8} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>


              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal9(true); modal(showModal9, cutting9) }} src={cutting9} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal11(true); modal(showModal11, cutting10) }} src={cutting10} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal11(true); modal(showModal11, cutting11) }} src={cutting11} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal12(true); modal(showModal12, cutting12) }} src={cutting12} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>


              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal13(true); modal(showModal13, cutting13) }} src={cutting13} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal14(true); modal(showModal14, cutting14) }} src={cutting14} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal15(true); modal(showModal15, cutting15) }} src={cutting15} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal16(true); modal(showModal16, cutting16) }} src={cutting16} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal17(true); modal(showModal17, cutting17) }} src={cutting17} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal18(true); modal(showModal18, cutting18) }} src={cutting18} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal19(true); modal(showModal19, cutting19) }} src={cutting19} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal20(true); modal(showModal20, cutting20) }} src={cutting20} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img onClick={() => { setShowModal21(true); modal(showModal21, cutting21) }} src={cutting21} className='w-24 h-48 relative ' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Press Coverage</h1>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>





        <div className='w-full h-max bg-white pt-8 my-8 mt-20 px-8 hidden md:flex' >
          <div className='flex w-full items-center'>
            <OwlCarousel items={3} className="owl-theme w-full flex justify-around flex-col" autoplay={false} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/Yq6mKYY50hg" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>पीला पंजा चला तो BPL परिवार का मुखिया चल बसा | Ashok Gehlot </h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/-O6oi60zRPw" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>पार्षद महेंद्र दैमन का उत्कृष्ट कार्यों के लिए किया सम्मान</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/J2drjjKw3X4" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>सड़क व खोदे गए गड्डों को अतिशीघ्र दुरुस्त करवाने के लिए पार्षद महेन्द्र दैमन ने सौपा ज्ञापन ।</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/KvBD8-4uRfU">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>
                    #बांदीकुई #abpnews ने बांदीकुई शहर में पीने के पानी की विकराल समस्या का आँखो देखा हाल का प्रदर्शन</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/JN4_jWNbI7M">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>#water #crisis issue in our city #bandikui #zeenews #rajasthan #india</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/fTJPE2i0HVc">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>#पार्षद #महेन्द्र_दैमन की सूझबूझ से बोरवेल में गिरी 18 माह की बच्ची को निकालने में मिली #कामयाबी</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/J2drjjKw3X4">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>
                    सड़क व खोदे गए गड्डों को अतिशीघ्र दुरुस्त करवाने के लिए पार्षद महेन्द्र दैमन ने सौपा ज्ञापन ।</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/_8UoE-M46pE">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>मिशन मदद कार्यक्रम के तहत पार्षद महेंद्र दैमन ने मदद का बीड़ा उठाया</h1>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
        <div className='md:hidden w-full h-max bg-white pt-8 my-8 mt-20 px-8 flex' >
          <div className='flex w-full items-center'>
            <OwlCarousel items={1} className="owl-theme w-full flex justify-around flex-col" autoplay={false} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/Yq6mKYY50hg" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>पीला पंजा चला तो BPL परिवार का मुखिया चल बसा | Ashok Gehlot </h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/-O6oi60zRPw" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>पार्षद महेंद्र दैमन का उत्कृष्ट कार्यों के लिए किया सम्मान</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/J2drjjKw3X4" allowfullscreen>
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>सड़क व खोदे गए गड्डों को अतिशीघ्र दुरुस्त करवाने के लिए पार्षद महेन्द्र दैमन ने सौपा ज्ञापन ।</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/KvBD8-4uRfU">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>
                    #बांदीकुई #abpnews ने बांदीकुई शहर में पीने के पानी की विकराल समस्या का आँखो देखा हाल का प्रदर्शन</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/JN4_jWNbI7M">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>#water #crisis issue in our city #bandikui #zeenews #rajasthan #india</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/fTJPE2i0HVc">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>#पार्षद #महेन्द्र_दैमन की सूझबूझ से बोरवेल में गिरी 18 माह की बच्ची को निकालने में मिली #कामयाबी</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/J2drjjKw3X4">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>
                    सड़क व खोदे गए गड्डों को अतिशीघ्र दुरुस्त करवाने के लिए पार्षद महेन्द्र दैमन ने सौपा ज्ञापन ।</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/_8UoE-M46pE">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                  <h1 className='text-black text-center font-bold text-lg'>मिशन मदद कार्यक्रम के तहत पार्षद महेंद्र दैमन ने मदद का बीड़ा उठाया</h1>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
