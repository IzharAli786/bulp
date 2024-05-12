import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const titleRef = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    // Initialize the timeline with a paused state and repeat
    const tl = gsap
      .timeline({ paused: true, repeat: -1, repeatDelay: 1 })
      .set(titleRef.current, { text: "" }) // Ensure starting with an empty text
      .to(titleRef.current, {
        text: "Welcome to Our World",
        ease: "none",
        duration: 2,
        delay: 0.6,
        immediateRender: false,
      })
      .to(titleRef.current, { text: "", duration: 1.5 });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
          } else {
            tl.pause().time(0.1);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center h-screen flex items-center justify-center bg-transparent"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1673306773569-4d864b99c96c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NGslMjBwaWNzfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 mb-6"></div>
      <div className="text-center p-5 relative z-10">
        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-6xl font-bold mb-4 user-select-none"
        ></h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Innovating one project at a time
        </p>
        <Link
          to="/services"
          className="bg-purple-700 text-gray-100 py-3 px-6 text-lg rounded-md hover:bg-[#8644A2] transition duration-300"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}
