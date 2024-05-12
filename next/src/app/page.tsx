import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/ui/featuredCourses";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">
        Abdul Rehman
      </h1> */}
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
};

export default page;
