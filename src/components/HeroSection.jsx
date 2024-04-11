import React, { useEffect, useRef } from "react";
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
        delay: 1,
      })
      .to(titleRef.current, { text: "", duration: 1.5 }); // Add a step to clear the text before repeating

    // Setup IntersectionObserver to control the animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
          } else {
            tl.pause().time(0); // Pause and reset the timeline to its initial state
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
      tl.kill(); // Proper cleanup to prevent memory leaks
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('')` }}
    >
      <div className="bg-gradient-to-r from-[#810CA0] to-[#8C147E] bg-opacity-50 absolute top-0 right-0 bottom-0 left-0 mb-6"></div>
      <div className="text-center p-5 relative z-10">
        <h1
          ref={titleRef}
          className="text-white text-5xl md:text-6xl font-bold mb-4"
        ></h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Innovating one project at a time
        </p>
        <a
          href="#services"
          className="bg-purple-400 text-gray-800 py-3 px-6 text-lg rounded-md hover:bg-[#8644A2] transition duration-300"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}
