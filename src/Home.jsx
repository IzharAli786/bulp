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

    const animation = gsap.fromTo(
      sectionRef.current,
      { x: -200, autoAlpha: 0, scale: 1 },
      { x: 0, autoAlpha: 1, duration: 2, scale: 1.05, scrollTrigger: { trigger: sectionRef.current, toggleActions: "play none none none" } }
    );

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-screen-lg">
      <h2 className="mt-10 mb-10 font-bold text-3xl text-center text-gray-500">Why Choose Us!</h2>
      <section ref={sectionRef} className="py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ReviewCard icon={faStar} title="Quality & Satisfaction" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex consectetur repudiandae ullam, provident error delectus, temporibus dolores praesentium molestiae numquam magni pariatur tenetur earum dicta voluptate exercitationem atque optio? Culpa " />
          <ReviewCard icon={faShieldAlt} title="Security & Reliability" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex consectetur repudiandae ullam, provident error delectus, temporibus dolores praesentium molestiae numquam magni pariatur tenetur earum dicta voluptate exercitationem atque optio? Culpa " />
          <ReviewCard icon={faHandsHelping} title="Flexibility & Advice" text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex consectetur repudiandae ullam, provident error delectus, temporibus dolores praesentium molestiae numquam magni pariatur tenetur earum dicta voluptate exercitationem atque optio? Culpa " />
        </div>
      </section>
    </div>
  );
};

const ReviewCard = ({ icon, title,text }) => (
  <div className="bg-gradient-to-r from-[#2C4E80] to-[#00215E]  rounded-[40px] shadow-xl p-5 flex flex-col items-center justify-between">
    <FontAwesomeIcon icon={icon} className="text-6xl mb-4 text-white" />
    <h3 className="text-xl text-gray-300 font-semibold mb-4">{title}</h3>
    <p className="text-gray-300 mb-6">{text}
    </p>
   
  </div>
);

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
