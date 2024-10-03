"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { Switch, SwitchProps } from "@nextui-org/switch";
import { FaMoon, FaSun } from "react-icons/fa6";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const isSelected = theme === "light" || isSSR;

  return (
    <Switch
      aria-label={`Switch to ${isSelected ? "dark" : "light"} mode`}
      checked={isSelected}
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className,
        classNames?.base,
      )}
      endContent={<FaMoon />}
      startContent={<FaSun />}
      onChange={onChange}
    />
  );
};
