import React, { useRef } from 'react';
import videoCinema from '../images/hello.mp4';
import './signIn.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function SignIn({scroll}) {
   const emailuser=useRef()
  const password=useRef()
  const remenber=useRef()
  const notify = () =>{
    let email=emailuser.current.value
    let pass=password.current.value
    let rem=remenber.current.checked

    if (email==="ista@gmail.com" && pass==="ista" && rem==true ) {
        return toast.success('Hello MOHAMED HICHY !', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

    }
    else{
      return toast.error("Sorry, we couldn't find your account and Remember me it's obligatory to checked !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
   
     
  }
  return (
   
   <>
   <header className="myheader">
        <Link to="/Mini_projet_Cinema" className='logo1'>
          <ion-icon name="film-outline"></ion-icon> hichy
        </Link>

      
      </header>
    <video autoPlay muted loop playsInline className="backVideo">
      <source src={videoCinema} type="video/mp4" />
    </video>
   <form className="form" onSubmit={(e)=>{
e.preventDefault()
   }}>
     
    

  <div className="flex-column">
    <label>Email </label></div>
  <div className="inputForm">
    <input placeholder="Enter your Email" className="input" type="email" ref={emailuser}/>
  </div>
  <div className="flex-column">
    <label>Password </label></div>
  <div className="inputForm">     
    <input placeholder="Enter your Password" className="input" type="password"  ref={password}/>
  </div>
  <div className="flex-row">
    <div className='remm'>
      <input type="checkbox"  id="remember" ref={remenber}/>
      <label className='label1' htmlFor="remember" >Remember me </label>
    </div>
    <span className="span1">Forgot password?</span>
  </div>

  <button type='submit' className="button-submit" onClick={notify} >Sign In</button>
  <p className="p">Don't have an account? <span className="span">Sign Up</span>
  </p><p className="p line">Or With</p>
  <div className="flex-row">
    <button className="btn google">
            <svg xmlSpace="preserve" style={{enableBackground: 'new 0 0 512 512'}} viewBox="0 0 512 512" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" width={20} version="1.1">
              <path d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
        c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
        C103.821,274.792,107.225,292.797,113.47,309.408z" style={{fill: '#FBBB00'}} />
              <path d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
        c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
        c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" style={{fill: '#518EF8'}} />
              <path d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
        c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
        c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" style={{fill: '#28B446'}} />
              <path d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
        c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
        C318.115,0,375.068,22.126,419.404,58.936z" style={{fill: '#F14336'}} />
      </svg>
      Google 
    </button><button className="btn apple">
      <svg xmlSpace="preserve" style={{enableBackground: 'new 0 0 22.773 22.773'}} viewBox="0 0 22.773 22.773" y="0px" x="0px" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Capa_1" width={20} height={20} version="1.1"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" /> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" /> </g></g></svg>
      Apple 
    </button></div>
    </form>
    <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
      />
      <Footer/>
   </>
   
  );
}

export default SignIn;
