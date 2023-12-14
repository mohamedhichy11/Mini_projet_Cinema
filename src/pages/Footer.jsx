import React from 'react'
import FooterNavItem from '../components/FooterNavItem'
import "./footer.css"
function Footer() {
    const usefullLinks=[
        "Home",
        "Movies",
        "My List",
        "Terms of service",
        "Privacy Policy"
    ]

    const locations=[
        "Agadir",
        "Mohammedia",
        "Tanger",
        "Tetoune",
        "Casablanca"
    ]
  return (
    <footer id="footer" className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo ">
                            <span> <ion-icon name="film-outline"></ion-icon> hichy </span>
                        </a>
                       <p>
                       Welcome to Hichy! We are your go-to platform for all things movies.
                        Explore our collection, create your own list, and enjoy a seamless
                        movie-watching experience with Hichy.
                       </p>
                       <div className="social-links mt-3">
                            <a href="#"  className='twitter'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>

                            <a href="#"  className='facebook'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>

                            <a href="#"  className='instagram'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>

                            <a href="#"  className='youtube'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                       </div>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            {
                                usefullLinks.map(link=>(
                                    <FooterNavItem key={link} name={link}/>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Cinemas</h4>
                        <ul>
                            {
                                locations.map(link=>(
                                    <FooterNavItem key={link} name={link}/>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>
                            Contact Us
                        </h4>
                        <p>Tanjia balia <br />
                        City Tanger , state 1225
                        <br />
                            Maroc
                            <br />
                            <br />
                            <strong>Phone:</strong> +1 2222 3333 44
                            <br />
                            <strong>Email:</strong> mohamedhichy25@gmail.com
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright {" "}
                <strong>
                    <span>
                        Hichy Technology
                    </span>
                </strong>
                . All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="#">Hichy Technology</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
