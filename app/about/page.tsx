"use client";

import { FC } from "react";

import { title, subtitle } from "@/components/primitives";

const AboutMe: FC = () => {
  return (
    <div className="w-full">
      <h2 className={title()}>About Me</h2>
      <p className={subtitle()}>
        Hello! My name is Patrick Kelly, a Senior Web Developer with over 20
        years of experience in creating high-performance web and mobile
        applications. My passion lies in bringing creative ideas to life through
        innovative technologies, and I have had the pleasure of working with
        amazing brands like Canadian Tire, Globacore, and WithU Training.
      </p>
    </div>
  );
};

export default AboutMe;
