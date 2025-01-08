import React from "react";
import "./index.css";
import Card from "./Components/Card";
import { buttonDetails } from "./Utils";
import Marquee from "./Components/Marquee";
import { Link } from "react-router-dom";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
import Footer from "./Components/Footer";

const Home = () => {
  const gaEventTracker = useAnalyticsEventTracker("Home");
  //bwgradient
  return (
    <main className="min-h-screen relative text-white/70">
      <div class="w-full h-full absolute top-0 z-[-10] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container mx-auto max-w-6xl mt-48 flex flex-col gap-y-12 p-4 xl:p-0">
        {/* <Feedback/> */}
        <div className="w-full grid lg:grid-cols-2 place-items-center mx-auto ">
          <div className="flex flex-col gap-y-6 items-center lg:items-start text-center lg:text-left">
            <h1 className="text-white/70 text-5xl md:text-6xl leading-snug font-bold mb-8 lg:mb-12">
              Nail your next <span className="text-white">interview</span>
            </h1>

            <h3 className="font-light max-w-prose">
              Get ready for your front-end interview with confidence. Explore
              the key topics commonly asked by FAANG companies and dive into
              code examples to sharpen your skills and ace your next interview.
            </h3>

            <Link
              to={`/problems`}
              onClick={() => gaEventTracker("click", "All Problems Button")}
              className=""
            >
              <p className="relative inline-flex items-center py-2 overflow-hidden transition duration-300 ease-out border-2 border-slate-700 rounded-md hover:border-slate-300 shadow-md group w-48">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full bg-transparent group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute font-bold text-base flex items-center justify-center w-full h-full  transition-all duration-300 transform group-hover:translate-x-full ease">
                  All problems
                </span>
                <span className="relative invisible">All problems</span>
              </p>
            </Link>
          </div>

          <div className="">
            <img
              src="/hero-img-osc-min.png"
              alt="Hero Image"
              className="max-w-sm md:w-full h-full"
            />
          </div>
        </div>

        <div>
          <Marquee />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="font-bold py-1 text-center lg:text-left text-3xl lg:text-4xl mb-8">
            Questions
          </h2>
          <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {buttonDetails.map(({ name, description }) => (
              <Card
                key={name}
                name={name}
                description={description}
                linkName={name}
                onClick={() => gaEventTracker("click", `Card - ${name}`)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="max-w-prose font-light  leading-8">
            Help us improve! Share your honest{" "}
            <Link to={`/feedback`}>
              <strong className="text-lime-400 font-bold">feedback</strong>
            </Link>{" "}
            for a better user experience.
          </p>
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
