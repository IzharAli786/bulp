import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import "..App/index.css";
const Services = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const images = document.querySelectorAll(".background");
    const headings = document.querySelectorAll(".section-title");
    const outerWrappers = document.querySelectorAll(".wrapper-outer");
    const innerWrappers = document.querySelectorAll(".wrapper-inner");
    let currentIndex = -1;
    const wrap = (index, max) => (index + max) % max;
    let animating;

    // Initial GSAP setup
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    const gotoSection = (index, direction) => {
      if (animating) return;
      index = wrap(index, sections.length);
      animating = true;

      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => (animating = false),
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      )
        .fromTo(
          images[index],
          {
            yPercent: 15 * dFactor,
          },
          {
            yPercent: 0,
          },
          0
        )
        .fromTo(
          headings[index],
          {
            autoAlpha: 0,
            yPercent: 150 * dFactor,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      currentIndex = index;
    };

    const navigateSectionById = (id) => {
      let index = Array.from(sections).findIndex(
        (section) => section.id === id
      );
      if (index !== -1 && index !== currentIndex) {
        gotoSection(index, index > currentIndex ? 1 : -1);
      }
    };

    // Event listeners for navigation
    document.querySelectorAll("nav a").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        navigateSectionById(e.currentTarget.getAttribute("href").slice(1));
      });
    });

    // Initial call to start the animation at the first section
    gotoSection(0, 1);
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative pt-14 pb-52">
        <div className="">
          <header className="flex items-center justify-between p-[5%] w-full h-28 text-blue text-sm font-bold font-serif tracking-widest inset-x-0 z-50 fixed">
            <nav>
              <a href="#first" className="text-white hover:text-red-400 mr-4">
                Digital Marketing
              </a>
              <a
                href="#second"
                className="text-white hover:text-green-300 mr-4"
              >
                E-Commerce
              </a>
              <a href="#third" className="text-white hover:text-blue-400 mr-4">
                Social media Marketing
              </a>
              <a
                href="#fourth"
                className="text-white hover:text-orange-400 mr-4"
              >
                SEO
              </a>
              <a
                href="#fifth"
                className="text-white hover:text-purple-400 mr-3 scale-120"
              >
                Consultation
              </a>
            </nav>
            <h1 className="text-2xl text-white hover:text-gray-200 font-bebas flex justify-center items-center">
              Our services
            </h1>
          </header>
          <Section
            id="first"
            title="City Skyline"
            className="first"
            bgUrl="https://images.unsplash.com/photo-1605629713998-167cdc70afa2?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM1NTR8&ixlib=rb-4.0.3&q=85"
          />
          <Section
            id="second"
            title="Flowers of friendship"
            className="second"
            bgUrl="https://images.unsplash.com/photo-1503796964332-e25e282e390f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM1NTR8&ixlib=rb-4.0.3&q=85"
          />
          <Section
            id="third"
            title="Waves in the Ocean"
            className="third"
            bgUrl="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM1OTh8&ixlib=rb-4.0.3&q=85"
          />
          <Section
            id="fourth"
            title="New York City"
            className="fourth"
            bgUrl="https://images.unsplash.com/photo-1584351583369-6baf055b51a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM4MTB8&ixlib=rb-4.0.3&q=85"
          />
          <Section
            id="fifth"
            title="Dark Side of the Moon"
            className="fifth"
            bgUrl="https://images.unsplash.com/photo-1516663713099-37eb6d60c825?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTM4MTB8&ixlib=rb-4.0.3&q=85"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

const Section = ({ id, title, className, bgUrl }) => {
  return (
    <div className="parent relative">
    <section id={id} className={`section ${className} fixed inset-0 `}>
      <div className="wrapper-outer w-full h-full overflow-hidden">
        <div className="wrapper-inner w-full h-full">
          <div
            className="background flex items-center justify-center fixed inset-0
             bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgUrl}), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%)`,
            }}
          >
            <h2 className="section-title text-5xl text-white text-center tracking-widest -mr-6">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};
export default Services;
