import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class CountriesBar extends Component {
  render() {
    return (
      <>
        <div className="countries-main-container">
          <div className="logos-container">
            <a
              href="https://m.facebook.com/LabyrinthGlobalSolutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/facebook.svg"
                alt="facebook"
                className="icon-image"
              />
            </a>
            <a
              href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsollabyrinth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/twitter-1.svg"
                alt="twitter"
                className="icon-image"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/14662183/admin/feed/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/linkedin-1.svg"
                alt="linkedin"
                className="icon-image"
              />
            </a>
            <a
              href="https://instagram.com/labyrinth_global_solutions?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/instagram.svg"
                alt="instagram"
                className="icon-image"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.techasoft.com/debug/img/youtube.svg"
                alt="youtube"
                className="icon-image"
              />
            </a>
          </div>
          <div className="logos-container-2">
            <a
              className="whatsapp_web"
              href="https://wa.me/442081236407?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1692641085/download_op1ski.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a
              className="contact-info first_nav_content mr-md-2"
              href="tel:+442081236407"
              rel="noopener noreferrer"
            >
              +442081236407
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/+442081236407?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/usa_watsapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a
              className="contact-info first_nav_content mr-md-2"
              href="tel:+1 8722606999"
              rel="noopener noreferrer"
            >
              +1 8722606999
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/+971522286916?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/dubai_whatapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a
              className="contact-info mob first_nav_content mr-md-2"
              href="tel:+971522286916"
              rel="noopener noreferrer"
            >
              +971522286916
            </a>
            <a
              className="whatsapp_web"
              href="https://wa.me/918884739988?text=I%20want%20to%20know%20more%20details%20about%20Techasoft%20Services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/india_watsapp.png"
                className="whatsapp-image"
                alt="whatsapp"
                title="WhatsApp"
              />
            </a>
            <a
              className="contact-info first_nav_content mr-md-2"
              href="tel:+918008448885"
              rel="noopener noreferrer"
            >
              +91 8008448885
            </a>
            <a
              className="navbar_mob_email first_nav_content mr-2"
              href="mailto:info@labyrinthglobalsolutions.com"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.techasoft.com/debug/img/email-3.svg"
                className=" email-icon "
                alt="email"
              />
            </a>
            <a
              href="mailto:info@labyrinthglobalsolutions.com"
              className="contact-info first_nav_content"
              rel="noopener noreferrer"
            >
              info@labyrinthglobalsolutions
            </a>
          </div>
        </div>

        <hr className="line" />
      </>
    );
  }
}

export default CountriesBar;
