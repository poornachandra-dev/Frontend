import React, { useEffect, useRef, useState } from 'react'
import ServiceBox from './components/serviceBox/ServiceBox.jsx'
import InfiniteMarquee from 'vanilla-infinite-marquee';

  const App = () => {
    const marqueeRef = useRef(null);
    const service = [
      {
        serviceName: "Web Development",
        serviceContent: "Custom websites and web apps built with modern frameworks like React, Next.js, and Tailwind CSS."
      },
      {
        serviceName: "UI/UX Design",
        serviceContent: "User-focused design that’s clean, responsive, and beautiful across all devices."
      },
      {
        serviceName: "Freelance Services",
        serviceContent: "Work with clients worldwide to build smart digital solutions, from landing pages to full platforms."
      }
    ];

    const skills = [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "ExpressJS",
      "NodeJS",
      "Python",
      "Java",
      "Figma",
      "Adobe Illustrator",
      "Adobe Photoshop"
    ];

    useEffect(() => {

      if (!marqueeRef.current) return;

      const marqueeFun = new InfiniteMarquee({
        element: '.marquee',
        speed: 150000,
        direction: 'left',
        duplicateCount: 2,
        pauseOnHover: true,
        mobileSettings: {
          direction: 'left',
          speed: 20000
        },
      });

      return () => {
        marqueeFun.destroy();
      }
    },[])
    

    return (
      <>
        <h1 className="head_logo">POORNA CHANDRA</h1>
        <p className='subtitle'>I build fast, responsive, and modern websites for individuals, startups, and businesses.</p>

        <div className="marquee" ref={marqueeRef}>
          {
            skills.map((skill, index) => (
              <span className="skillBox" key={index}>
                {skill}
              </span>
            ))
          }
        </div>

        <div className="service_sec">
          <h1 className="sec_title">My Services</h1>
          <div className="services">
          {service.map((ser) => (
            <ServiceBox
              key={ser.serviceName} 
              serviceName={ser.serviceName}
              serviceContent={ser.serviceContent}
            />
          ))}
          </div>
          
        </div>

        <div className="contact_sec">
          <h1 className="contact_head">Let’s Collaborate</h1>
          <p className="contact_content">Have a project in mind or need help refining your product’s UI and experience? I’d love to hear from you.</p>

          <div className="contact_btn">Get in Touch</div>
        </div>
      </>
    )
  }

export default App