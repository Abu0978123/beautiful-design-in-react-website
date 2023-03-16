import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './services.css';
import Home from './Assets/components/Home';
import Navbar from './Assets/components/Navbar';
import Services from './Assets/components/Services';
import Work from './Assets/components/Work';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog from './Assets/components/Blog';
import Contact from './Assets/components/Contact';
import Footer from './Assets/components/Footer';
import Login from './Assets/components/Login';
import Signup from './Assets/components/Signup';
function App() {
  useEffect(()=>{
    AOS.init();
    window.onscroll = function() {
      if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
          document.getElementById('navbar').classList.add('scrolled');
      } else {
          document.getElementById('navbar').classList.remove('scrolled');
      }
  }
  },[])
  return (
    <div >
     <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/work'element={<Work/>} />
        <Route path='/blog'element={<Blog/>} />
        <Route path='/services'element={<Services/>} />
        {/* <Route path='/resume'element={<Resume/>} /> */}
        <Route path='/contact'element={<Contact/>} />
        <Route path='/login'element={<Login/>} />
        <Route path='/signup'element={<Signup/>} />
        {/* <Route path='/*'element={<Error/>} /> */}
        {/* <Route render={() => <Navigate to="/about" />} /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
</>
    </div>
  );
}

export default App;
