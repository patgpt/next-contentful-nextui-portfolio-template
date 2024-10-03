"use client";

import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { useRef } from "react";

import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";

import { useDimensions } from "@/hooks/use-dimensions";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const HamburgerNavigationMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const dimensions = useDimensions(containerRef);

  const { height } = dimensions || {
    height: 0,
  };

  return (
    <motion.nav
      ref={containerRef}
      animate={isOpen ? "open" : "closed"}
      className="absolute top-0 left-0 bottom-0 w-72 "
      custom={height}
      initial={false}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-72 bg-white  "
        variants={sidebar}
      />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
