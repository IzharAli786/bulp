import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimony = () => {
  const sliderContainerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevDesktopButtonRef = useRef(null);
  const nextDesktopButtonRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderContainerRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const prev = [prevButtonRef.current, prevDesktopButtonRef.current];
    const next = [nextButtonRef.current, nextDesktopButtonRef.current];

    prev.forEach((button) =>
      button.addEventListener("click", () => slider.prev())
    );
    next.forEach((button) =>
      button.addEventListener("click", () => slider.next())
    );

    // Cleanup function
    return () => {
      slider.destroy();
    };
  }, []);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const element = sectionRef.current;

    const animation = gsap.fromTo(
      element,
      {
        y: -200,
        autoAlpha: 0,
        scale: 0.9,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        scale: 1,
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
    <section ref={sectionRef} className="bg-gray-50">
      <div className="max-w-[1600px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-purple-900 sm:text-4xl lg:mb-7">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                ref={prevDesktopButtonRef}
                className="rounded-full border border-purple-600 p-3 text-purple-600 transition hover:bg-purple-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                ref={nextDesktopButtonRef}
                className="rounded-full border border-purple-600 p-3 text-purple-600 transition hover:bg-purple-600 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderContainerRef} className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Star Rating SVGs */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-purple-900 sm:text-3xl">
                        Stayin' Alive
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-green-500">
                      {/* Star Rating SVGs */}
                    </div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-purple-900 sm:text-3xl">
                        Manthar Ali{" "}
                      </p>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        here i am here you are
                      </p>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            ref={prevButtonRef}
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            ref={nextButtonRef}
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
