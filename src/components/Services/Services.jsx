import { useRef, useEffect, useState } from "react";
import "./Services.scss";
import { animate, motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htmlLogo from "../../../public/IMG_5341-removebg-preview.png";
import cssLogo from "../../../public/css-removebg-preview.png";
import jsLogo from "../../../public/IMG_5340-removebg-preview.png";
import reactLogo from "../../../public/IMG_5357-removebg-preview.png";

const variants = {
  initial: { x: -500, y: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const BoxData = [
  {
    title: "HTML",
    desc: htmlLogo,
  },
  {
    title: "CSS",
    desc: cssLogo,
  },
  {
    title: "JAVASCRIPT",
    desc: jsLogo,
  },
  {
    title: "REACT",
    desc: reactLogo,
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 738);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people"></img>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Build </motion.b>
            Projects
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business.
          </h1>
          <button>Using</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        {isMobile ? (
          <Slider>
            {BoxData.map((e, index) => (
              <div key={index} className="box">
                <h2>{e.title}</h2>
                <img src={e.desc} alt={e.title} />
              </div>
            ))}
          </Slider>
        ) : (
          BoxData.map((e, index) => (
            <motion.div key={index} className="box">
              <h2>{e.title}</h2>
              <img src={e.desc} alt={e.title} />
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
