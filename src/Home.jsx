import React, { useEffect, useRef } from "react";
import ImageSlider from "./components/ImageSlider";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimony from "./components/Testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  faStar,
  faShieldAlt,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = sectionRef.current;

    const animation = gsap.fromTo(
      element,
      {
        x: -200,
        autoAlpha: 0,
        scale: 1,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 2,
        scale: 1.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      animation.kill(); // Proper cleanup to avoid memory leaks
    };
  }, []);
  return (
    <div className="">
      <h2 className="mt-10 mb-10 font-bold text-3xl text-center text-gray-500">
        Why Choose Us!
      </h2>
      <section ref={sectionRef} className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-r from-[#810CA0] to-[#8C147E] rounded-lg shadow-xl p-8 flex flex-col items-center justify-between h-full">
              <FontAwesomeIcon
                icon={faStar}
                className="text-purple-700  text-6xl mb-4"
              />
              <h3 className="text-xl text-white font-semibold mb-4">
                Quality & Satisfaction
              </h3>
              <p className="text-white mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sunt optio placeat atque adipisci animi aliquid, vitae qui rerum
                exercitationem quasi molestias expedita quibusdam dolor quidem
                rem vel illum! Ipsum ullam nemo, sed culpa inventore quasi
                magnam deleniti aperiam a tempora quos perferendis qui
                temporibus nam obcaecati sunt assumenda. Error.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 transition duration-300"
              >
                Read More
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-gradient-to-r from-[#810CA0] to-[#8C147E]  rounded-lg shadow-xl p-8 flex flex-col items-center justify-between h-full">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-purple-600 text-6xl mb-4"
              />
              <h3 className="text-xl text-white font-semibold mb-4">
                Security & Reliability
              </h3>
              <p className="text-white mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                dolorum repudiandae? Ex iusto et voluptate alias ab aliquam
                mollitia dicta molestiae consequuntur odio hic, minus commodi
                dolor ad officia exercitationem magnam, repellendus inventore
                sint aliquid in! Repellendus adipisci quos accusantium
                aspernatur odit blanditiis molestias sint. Iste eaque nesciunt
                similique. Fugit.
              </p>
              <a
                href="#"
                className="text-gray-100 hover:text-purple-300 transition duration-300"
              >
                Read More
              </a>
            </div>
            {/* Card 3 */}
            <div className="bg-gradient-to-r from-[#810CA0] to-[#8C147E]  rounded-lg shadow-xl p-8 flex flex-col items-center justify-between h-full">
              <FontAwesomeIcon
                icon={faHandsHelping}
                className="text-purple-500 text-6xl mb-4"
              />
              <h3 className="text-xl text-white font-semibold mb-4">
                Flexibility & Advice
              </h3>
              <p className="text-white mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestias doloribus officiis earum distinctio autem
                aut quo mollitia. Ut quas maxime dolor odit sequi dignissimos
                nostrum. Fugiat dolore est alias quisquam laboriosam quos
                voluptatum ullam perspiciatis. Labore ratione deleniti fuga nam,
                corporis, nihil eius aperiam nisi exercitationem pariatur nulla
                obcaecati.
              </p>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Testimony />
      <HeroSection />
      <Review />

      <Footer />
    </>
  );
}

export default Home;
