import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import 'swiper/css';
import Banner from './pages/Banner';
import Header from './pages/header';
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";

function App() {
  const[scroll,setScroll]=useState(0)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY)
    })
    return ()=>{
      window.removeEventListener("scroll",()=>{
        setScroll(window.scrollY)
      })
    }
  },[scroll])
  return (
  <>
  <Header scroll={scroll}/>
  <Banner/>
  <Main />
  
  <Footer />
  <BackToTop  scroll={scroll}/>
  </>

  );
}

export default App;
