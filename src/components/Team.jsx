import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./Navbar";
import Footer from "./Footer";
import gsap from "gsap";

const teamMembers = [
  {
    name: "Ben Smith",
    role: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.",
    image:
      "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80",
    facebook: "https://facebook.com/jason",
    linkedin: "https://linkedin.com/in/jason",
  },
  {
    name: "Jason",
    role: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.",
    image:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    facebook: "https://facebook.com/jason",
    linkedin: "https://linkedin.com/in/jason",
  },
  {
    name: "Chris Jones",
    role: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.",
    image: "https://miro.medium.com/max/814/1*Ri024ZNn0dtXQDmswflYFw.jpeg",
    facebook: "https://facebook.com/jason",
    linkedin: "https://linkedin.com/in/jason",
  },
  {
    name: "Izhar Ali",
    role: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.",
    image:
      "https://images.unsplash.com/photo-1712107062961-4a758df77267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    facebook: "https://facebook.com/jason",
    linkedin: "https://linkedin.com/in/jason",
  },
  {
    name: "Waqar ali ",
    role: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum similique eligendi numquam.",
    image:
      "https://images.unsplash.com/photo-1712107062961-4a758df77267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
    facebook: "https://facebook.com/jason",
    linkedin: "https://linkedin.com/in/jason",
  },
];

const Team = () => {
  const myElement = useRef(null);
  useEffect(() => {
    // Use gsap.to() to animate
    gsap.from(myElement.current, {
      duration: 2.5,
      y: 100,
      opacity: 1,
      ease: "power2.out",
      scale: 1.3,
    });
  }, []);
  return (
    <>
      <Navbar />
      <section>
        <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-200 py-10 mt-10">
          <h2 className="text-center text-6xl font-dancing font-bold text-purple-600 mb-16">
            Our Team
          </h2>
          <div
            ref={myElement}
            className="flex flex-wrap justify-center items-center gap-4 px-4"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-f7f7f7 shadow-lg cursor-pointer transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
                />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white font-bebas text-lg py-3 px-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out -translate-y-12">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-gray-200 py-10 px-4 min-h-screen mt-10 ">
        <div className="text-center">
          <h1 className="text-6xl text-purple-600 font-bold mb-2 inline-block relative uppercase font-dancing">
            About our team
          </h1>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-purple-500 mt-2 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="m-5 p-5 text-center cursor-pointer max-w-sm transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-5"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto w-36 h-36 object-cover rounded-full border-4 border-purple-600 mb-4"
              />
              <h2 className="text-xl text-purple-600 uppercase font-semibold mb-2">
                {member.name}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              {/* Social Icons */}
              <a
                href={member.facebook}
                className="mx-6 text-purple-600 hover:text-purple-700 transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href={member.linkedin}
                className="mx-2 text-purple-600 hover:text-purple-700 transform hover:-translate-y-1 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Team;
