import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faUsersCog,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function About() {
  const numbersRef = useRef([]);
  const barsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    numbersRef.current.forEach((num, index) => {
      tl.fromTo(num, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, index * 0.2);
    });

    tl.fromTo(
      ".About",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );

    barsRef.current.forEach((bar, index) => {
      tl.fromTo(bar, { width: 0 }, { width: `${bar.dataset.width}%` }, "-=0.8");
    });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 my-36">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="fadeInUp" data-wow-delay="0.1s">
                <div className="bg-gray-100 rounded text-center h-full p-5">
                  <i className="fas fa-certificate text-4xl mb-4 text-purple-500"></i>
                  <FontAwesomeIcon
                    icon={faCertificate}
                    className="text-4xl mb-4"
                    style={{ color: "purple" }}
                  />
                  <h5 className="mb-3">Years Experience</h5>
                  <h1
                    ref={(el) => (numbersRef.current[0] = el)}
                    className="font-extrabold"
                  >
                    <CountUp start={0} end={5} duration={2} />
                  </h1>
                </div>
              </div>
              <div className="fadeInUp" data-wow-delay="0.3s">
                <div className="bg-gray-100 rounded text-center h-full p-5">
                  <i className="fas fa-users-cog text-4xl mb-4 text-purple-500"></i>
                  <FontAwesomeIcon
                    icon={faUsersCog}
                    className="text-4xl mb-4"
                    style={{ color: "purple" }}
                  />
                  <h5 className="mb-3">Team Members</h5>
                  <h1
                    ref={(el) => (numbersRef.current[1] = el)}
                    className="font-extrabold"
                  >
                    <CountUp start={0} end={5} duration={2} />
                  </h1>
                </div>
              </div>
              <div className="fadeInUp" data-wow-delay="0.5s">
                <div className="bg-gray-100 rounded text-center h-full p-5">
                  <i className="fas fa-users text-4xl mb-4 text-purple-500"></i>
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-4xl mb-4"
                    style={{ color: "purple" }}
                  />

                  <h5 className="mb-3">Satisfied Clients</h5>
                  <h1
                    ref={(el) => (numbersRef.current[2] = el)}
                    className="font-extrabold"
                  >
                    <CountUp start={0} end={2000} duration={2} />
                  </h1>
                </div>
              </div>
              <div className="fadeInUp" data-wow-delay="0.7s">
                <div className="bg-gray-100 rounded text-center h-full p-5">
                  <i className="fas fa-check text-4xl mb-4 text-purple-500"></i>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-4xl mb-4"
                    style={{ color: "purple" }}
                  />
                  <h5 className="mb-3">Projects Done</h5>
                  <h1
                    ref={(el) => (numbersRef.current[3] = el)}
                    className="font-extrabold"
                  >
                    <CountUp start={0} end={1234} duration={2} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 About">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="fadeInUp" data-wow-delay="0.1s">
                <div className="img-border">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMGJ1c2luZXNzbWFuJTIwJTIwcGljfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
              </div>
              <div className="fadeInUp" data-wow-delay="0.5s">
                <div className="h-full">
                  <h1 className="text-purple-500">About Us</h1>
                  <h1 className="text-3xl md:text-4xl mb-4">
                    #1 Digital Solution With{" "}
                    <span className="text-purple-500 box-border border-spacing-1">
                      10 Years
                    </span>{" "}
                    Of Experience
                  </h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <div className="flex items-center mb-4 pb-2">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZSUyMGJ1c2luZXNzbWFuJTIwJTIwcGljfGVufDB8fDB8fHww"
                      alt=""
                    />
                    <div className="pl-4">
                      <h6>Jhon Doe</h6>
                      <small>SEO & Founder</small>
                    </div>
                  </div>
                  <Link
                    className="btn rounded-full text-fuchsia-100 py-3 px-5 bg-fuchsia-800 border-2 border-transparent transition duration-300 hover:bg-white hover:text-fuchsia-800 hover:border-fuchsia-800"
                    to="/Services"
                  >
                    What We Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="fadeInUp" data-wow-delay="0.1s">
                <div className="h-full">
                  <h1 className="text-3xl md:text-4xl mb-4">
                    Why People Trust Us? Learn About Us!
                  </h1>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <p>Digital Marketing</p>
                        <p>85%</p>
                      </div>
                      <div className="h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          ref={(el) => (barsRef.current[0] = el)}
                          data-width={85}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <p>SEO & Backlinks</p>
                        <p>90%</p>
                      </div>
                      <div className="h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          ref={(el) => (barsRef.current[1] = el)}
                          data-width={90}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <p>Design & Development</p>
                        <p>95%</p>
                      </div>
                      <div className="h-2 rounded-full bg-gray-300">
                        <div
                          className="h-full rounded-full bg-purple-500"
                          ref={(el) => (barsRef.current[2] = el)}
                          data-width={95}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fadeInUp" data-wow-delay="0.5s">
                <div className="img-border">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
