import React from 'react'
import Navbar from './Navbar';
import Carousel from 'react-material-ui-carousel';
import './Css/homepage.css';
import figure from './assets/figure.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import paper from './assets/paper.png';
function Item() {
  return (
    // <Paper style={{'borderRadius':'0px !important'}}>
    <div>
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="w-full" alt="..." />
    </div>
    // </Paper>
  )
}
const Homepage = (props) => {
  return (
    <div>
      <div className='my-14'>
        <Carousel navButtonsAlwaysInvisible="true" animation='slide' duration="800">

          <Item />
          <Item />
          <Item />

        </Carousel>
        <div className='w-full h-72 bg-white py-8 my-8' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='h-full w-full bg-black flex items-center justify-evenly'>
            <div className='w-44 h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-2xl'>cases solved</h1>
            </div>
            <div className='w-44 h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-2xl'>cases solved</h1>
            </div>
            <div className='w-44 h-48 flex flex-col justify-center items-center'>
              <div className='w-24 md:w-36 h-24 flex items-center justify-center' style={{ 'backgroundImage': `url(${figure})`, 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain' }}>
                {/* <img src={figure} className='' alt='...' /> */}
                <h1 className='specialres md:special text-black'>23</h1>

              </div>
              <h1 className='text-white uppercase font-semibold text-base md:text-2xl'>cases solved</h1>
            </div>
          </div>
        </div>
        <div className='w-full h-max lg:h-72 xl:h-72 2xl:h-72 flex flex-col lg:flex-row sm:flex-col md:flex-col items-center mt-5 lg:mt-20'>
          <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 py-8 px-8 lg:p-14 flex flex-col'>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="" alt="..." />
            <h1 className='font-semibold mt-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, earum?</h1>
          </div>
          <div className='w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 py-0 px-8 lg:p-14 '>
            <p className='text-sm font-medium mb-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore aliquid atque, iure molestiae nesciunt dolore porro nisi laborum incidunt at laudantium molestias unde blanditiis. Fugit laboriosam accusamus reiciendis, dicta tempora impedit voluptatibus illum earum, temporibus error repellat labore perspiciatis quibusdam maxime magni debitis fugiat quae. Tenetur ea doloribus veritatis recusandae fugiat quis deserunt! Aliquam enim dolorem a, culpa architecto harum rerum explicabo expedita obcaecati autem quis ea deleniti voluptas illum illo temporibus neque earum veniam! Beatae harum provident enim! Maxime vel distinctio consequatur omnis. Iste inventore nisi labore dignissimos eligendi aperiam ipsa quam obcaecati vero nobis? Praesentium ducimus sapiente unde.
            </p>
          </div>
        </div>
        <div className='hidden w-full h-96 bg-white pt-8 my-8 mt-20 px-8 md:flex' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='flex w-full items-center'>
            <OwlCarousel items={3} className="owl-theme w-full flex justify-around flex-col" autoplay={true} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48  relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48 relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48 relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>




        <div className=' w-full h-96 bg-white pt-8 my-8 mt-20 px-8 flex md:hidden' style={{ 'borderTop': '1px solid black', 'borderBottom': '1px solid black' }}>
          <div className='flex w-full items-center'>
            <OwlCarousel items={1} className="owl-theme w-full flex justify-around flex-col" autoplay={true} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48  relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48 relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <div className='h-max w-full border-2 border-black bg-white'>
                  <img src={paper} className='w-24 h-48 relative top-2 right-2' alt="" />
                </div>
                <div className='border-2 w-full border-black bg-white p-1 mt-5'>
                  <div className='border-2 border-black bg-white py-1'>
                    <h1 className='text-black text-center font-bold text-lg'>Button</h1>
                  </div>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>





        <div className='w-full h-max bg-white pt-8 my-8 mt-20 px-8 hidden md:flex' >
          <div className='flex w-full items-center'>
            <OwlCarousel items={3} className="owl-theme w-full flex justify-around flex-col" autoplay={true} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
              <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
              <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
              </div>


            </OwlCarousel>
          </div>
        </div>
        <div className='md:hidden w-full h-max bg-white pt-8 my-8 mt-20 px-8 flex' >
          <div className='flex w-full items-center'>
            <OwlCarousel items={1} className="owl-theme w-full flex justify-around flex-col" autoplay={true} loop margin={100}>

              <div className='h-max w-full flex flex-col justify-center items-center item'>
                <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
              <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>
              </div>
              <div className='h-max w-full flex flex-col justify-center items-center item'>
              <iframe width="320" height="315"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                </iframe>
                <div className=' bg-white p-1 mt-5'>
                <h1 className='text-black text-center font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
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
