import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({
  item,
  index,
}: {
  item: {
    label: string;
    href: string;
  };
  index: number;
}) => {
  const style = {
    border: `2px solid ${colors[index]}`,
    borderRadius: "14px",
    padding: "10px",
  };

  return (
    <motion.li
      className="list-none mb-5 flex items-center cursor-pointer"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className="flex items-center w-full" href={item.href} style={style}>
        {item.label}
      </Link>
    </motion.li>
  );
};
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
