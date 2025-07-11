"use client";
import React, { useEffect, useState } from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";
import react from "../../images/react.webp";
import nextjs from "../../images/nextjs.webp";
import redux from "../../images/redux.webp";
import tailwind from "../../images/tailwind.webp";
import css from "../../images/css.webp";
import firebase from "../../images/firebase.webp";
import javascript from "../../images/javascript.webp";
import github from "../../images/github.webp";
import html from "../../images/html.webp";

const AboutDetails = () => {
  let totalExperience = getTotalExperience();

  const aboutDetailsData = {
    title: "Architect of Enchantment",
    description: `My journey in web development is powered by an array of mystical
    tools and languages, with JavaScript casting the core of my
    enchantments. I wield frameworks like React.js and Next.js with
    precision, crafting seamless portals (websites) that connect realms
    (users) across the digital universe. The ancient arts of the
    Jamstack empower me to create fast, secure, and dynamic experiences,
    while my design skills ensure every creation is not only functional
    but visually captivating. Join me as I continue to explore new
    spells and technologies to shape the future of the web.`,
    highlights: [
      {
        text: "Makbyte.io",
        subtext: "current company",
      },
      {
        text: totalExperience,
        subtext: "years of experience",
      },
    ],
    skills: [
      react,
      nextjs,
      redux,
      tailwind,
      css,
      firebase,
      javascript,
      github,
      html,
    ],
  };

  function getTotalExperience() {
    const startDate = new Date("2022-08-01");
    const todaysDate = new Date();
    let years = todaysDate.getFullYear() - startDate.getFullYear();

    let months = todaysDate.getMonth() - startDate.getMonth();
    console.log(years, months);

    if (months < 0) {
      years--;
      months += 12;
    }
    return `${years}.${months}`;
  }

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        {/* Title and Description */}
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            {aboutDetailsData.title}
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {aboutDetailsData.description}
          </p>
        </ItemLayout>

        {/* Highlights */}
        {aboutDetailsData.highlights.map((highlight, index) => (
          <ItemLayout
            key={index}
            className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              {highlight.text}{" "}
              <sub className="font-semibold text-base">{highlight.subtext}</sub>
            </p>
          </ItemLayout>
        ))}

        {/* Skills */}
        <ItemLayout
          className={"col-span-full flex items-center gap-10 justify-center"}
        >
          {aboutDetailsData.skills.map((skill, index) => {
            return <Image key={index} width={72} src={skill} />;
          })}
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
