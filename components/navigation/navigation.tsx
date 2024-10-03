import * as React from "react";
import { motion } from "framer-motion";

import { MenuItem } from "./menu-item";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul className="absolute top-24 w-56" variants={variants}>
    {navigationMenuItems.map((item, index) => (
      <MenuItem key={item.href} index={index} item={item} />
    ))}
  </motion.ul>
);

const navigationMenuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
