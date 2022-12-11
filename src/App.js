// import logo from './logo.svg';
import './App.css';
import Faq from './Faq';
import Blogpage from './Blogpage';
import Blogpost from './Blogpost';
import Form from './Form';
import Homepage from './Homepage';
import Navbar from './Navbar';
import Footer from './Footer';
import Addblog from './Addblog';
import Verification from './Phoneveri';
import Postverification from './Postverification';
import About from './About';
import Testpage from './testpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Donate from './Donate';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/blogs" element={<Blogpage />} />
          <Route exact path="/blogpost" element={<Blogpost />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/postverification" element={<Postverification />} />
          <Route exact path="/Addblog" element={<Addblog />} />
          <Route exact path="/Donate" element={<Donate />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
