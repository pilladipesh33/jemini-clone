import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div>
      <motion.svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M14 28C14 26.0633 13.6267 24.2433 12.88 22.54C12.1567 20.8367 11.165 19.355 9.905 18.095C8.645 16.835 7.16333 15.8433 5.46 15.12C3.75667 14.3733 1.93667 14 0 14C1.93667 14 3.75667 13.6383 5.46 12.915C7.16333 12.1683 8.645 11.165 9.905 9.905C11.165 8.645 12.1567 7.16333 12.88 5.46C13.6267 3.75667 14 1.93667 14 0C14 1.93667 14.3617 3.75667 15.085 5.46C15.8317 7.16333 16.835 8.645 18.095 9.905C19.355 11.165 20.8367 12.1683 22.54 12.915C24.2433 13.6383 26.0633 14 28 14C26.0633 14 24.2433 14.3733 22.54 15.12C20.8367 15.8433 19.355 16.835 18.095 18.095C16.835 19.355 15.8317 20.8367 15.085 22.54C14.3617 24.2433 14 26.0633 14 28Z"
          fill="url(#paint0_radial_16771_53212)"
          animate={{
            scale: [1, 1, 1, 1],
            rotate: [0, 90, 90, 0],
          }}
          transition={{
            duration: 5,
            ease: "easeIn",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        <defs>
          <radialGradient
            id="paint0_radial_16771_53212"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(2.77876 11.3795) rotate(18.6832) scale(29.8025 238.737)"
          >
            <stop offset="0.0671246" stopColor="#9168C0" />
            <stop offset="0.342551" stopColor="#5684D1" />
            <stop offset="0.672076" stopColor="#1BA1E3" />
          </radialGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default Logo;
