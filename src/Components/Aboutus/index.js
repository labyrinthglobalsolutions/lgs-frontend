import ReactPlayer from "react-player";

import "./index.css";
import aboutus from "../images/AboutUs.jpg";
import mission from "../images/Mission.jpg";
import video from "../images/Core Values.mp4";
import whychoosevideo from "../images/whyChooseLGS.mp4";
import Footer from "../Footer";
import Header from "../navbar";
import { BeatLoader } from "react-spinners";

import React, { Component } from 'react'

 class about extends Component {
  state = {loading: true}

  componentDidMount() {
    // Simulate an API call or any async operation
    window.scrollTo(0,0);
    setTimeout(() => {
      this.setState({ loading: false }); // Set loading to false when your data is ready
    }, 500); 
  }

  render() {
    const { loading } = this.state;
    return (
      <>
      <Header />
      {loading ? (
          <div className="spinner">
            <BeatLoader size={20} color={"#123abc"} loading={loading} />
          </div>
        ) : (
            <div className="mainContainer">
        <div className="aboutus-image-container">
          <center>
            <h1 className="about-top-heading">Get To Know About LGS</h1>
          </center>
        </div>
        <div className="aboutUsCard">
          <div className="firstcard">
            <div>
              <h3>Navigating Digital Transformation​</h3>
              <p className="about-description">
                At Labyrinth Global Solutions, we are your trusted partner in
                navigating the complex landscape of digital transformation. Our
                tireless commitment to helping organizations evolve and thrive
                in the digital age sets us apart. With a clear focus on
                commitment, timely delivery, and quality, we provide
                cost-effective solutions that drive your success
              </p>
              <p className="about-description">
                Labyrinth was started in the year 2010 with a mission to lead
                organizations through the transformative journey of
                digitalization, over the last 1 decade we have successfully
                delivered innovative services & products to various industries
                such as Automotive, Aerospace, Defense, Oil & Gas, Energy &
                Utilities, Life Sciences, Banking Financial & Insurance
              </p>
            </div>
            <img className="firstimage" alt="about" src={aboutus} />
          </div>
          <center>
            <h1 className="thrive-content">
              Transform with Us. Innovate with Us. Thrive with Us.
            </h1>
          </center>
          <div className="firstcard">
            <img alt="mission" className="firstimage" src={mission} />
            <div>
              <h1 className="heading">Our Mission</h1>
              <p className="about-description">
                {" "}
                Our mission at Labyrinth Global Solutions is to guide businesses
                through the intricate journey of digital transformation. By
                harnessing the power of cutting-edge technologies and innovative
                strategies, we empower organizations to adapt, grow, and excel
                in an ever-evolving digital world
              </p>
            </div>
          </div>
          <div className="firstcard">
          <div className="responsive-container about-video-setting react-player">
                  <ReactPlayer url={video} controls />
                </div>
            <div>
              
                <div>
                  <h1 className="heading">Our Core Values:</h1>
                  <p className="about-description">
                    <span className="sub-heading-aboutpage">Commitment:</span>At
                    the heart of our approach lies a deep commitment to our
                    clients' success. We forge strong partnerships built on
                    trust, transparency, and collaboration. Your goals become
                    our goals, and we work tirelessly to deliver results that
                    exceed expectations.
                  </p>
              
                </div>
               
             
              
              <p className="about-description">
                <span className="sub-heading-aboutpage">Timely Delivery:</span>
                We understand that time is of the essence in the fast-paced
                world of business. Our dedicated teams are driven to deliver
                solutions within agreed-upon timelines, ensuring that your
                projects stay on track and achieve the desired outcomes.
              </p>
              <p className="about-description">
                <span className="sub-heading-aboutpage">
                  Quality with Cost-Effective Solutions:
                </span>
                We believe that quality should never be compromised, and neither
                should your budget. Our team of experts leverages their skills
                and experience to provide high-quality solutions that are also
                cost-effective, allowing you to maximize value.
              </p>
            </div>
          </div>
          <div className="firstcard">
            <div className="responsive-container about-video-setting react-player">
              <ReactPlayer url={whychoosevideo} controls />
            </div>
            <div>
              <h1 className="heading">Our Services:</h1>
              <p className="about-description">
                <span className="sub-heading-aboutpage">
                  Application Lifecycle Management (ALM):
                </span>{" "}
                Our ALM solutions streamline the entire software development
                process, from ideation to deployment and beyond. We help you
                manage the complexities of development, testing, and release
                while ensuring the highest standards of quality and efficiency.
              </p>
              {/*<p className='about-description'><span className='sub-heading-aboutpage'>Product Lifecycle Management (PLM):</span>With our PLM expertise, we empower your organization to manage product information, collaboration, and innovation seamlessly. From design to end-of-life, our solutions optimize your product development lifecycle.</p>*/}
              <p className="about-description">
                <span className="sub-heading-aboutpage">
                  Low-Code Development:{" "}
                </span>
                Embrace the power of low-code platforms to rapidly build and
                deploy applications that meet your unique business needs. Our
                low-code solutions accelerate development while maintaining
                flexibility and scalability.
              </p>
              <p className="about-description">
                <span className="sub-heading-aboutpage">
                  Custom Development:
                </span>
                Recognizing that one size doesn't fit all, our custom
                development services craft tailored solutions that align with
                your specific goals and challenges. We turn your ideas into
                reality with innovative, fully customized applications.
              </p>
            </div>
          </div>
        </div>
      </div>
        )}
      
      <Footer />
      </>
    )
  }
}

export default about


