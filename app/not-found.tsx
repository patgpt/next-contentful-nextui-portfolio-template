"use client";

import { useState } from "react";
import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaHouse } from "react-icons/fa6";

export default function NotFound() {
  const [isAlien, setIsAlien] = useState(true);

  const handleClick = () => {
    setIsAlien(!isAlien);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h2 className="font-display mb-4 text-3xl text-primary">
        Page Not Found
      </h2>
      <p className="text-pretty text-center text-secondary text-lg mb-4">
        Could not find requested resource
      </p>
      <motion.div
        animate={{ x: [0, 100, -100, 0] }}
        className="text-6xl mb-4 cursor-pointer"
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={handleClick}
      >
        {isAlien ? "👾" : "🔥"}
      </motion.div>
      <Link
        isExternal
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
        })}
        href="/"
      >
        <FaHouse />
        Home
      </Link>
    </div>
  );
}
