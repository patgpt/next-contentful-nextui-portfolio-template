import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [
    nextui({
      themes: {
        // Extended Light Theme
        "purple-light": {
          extend: "light", // Inherit from the default light theme
          colors: {
            background: "#FFFFFF", // Light background
            foreground: "#333333", // Text color for light theme
            primary: {
              50: "#F3E9FC",
              100: "#E2D0FA",
              200: "#C4A6F5",
              300: "#A57BF1",
              400: "#874FEB",
              500: "#6A0DAD", // Main purple for light mode
              600: "#5A098D",
              700: "#45076A",
              800: "#310448",
              900: "#1D0225",
              DEFAULT: "#6A0DAD", // Primary purple
              foreground: "#ffffff",
            },
            secondary: {
              500: "#FFD700", // Accent yellow
              foreground: "#000000", // Text on yellow
            },
            focus: "#A57BF1", // Focus color for purple
          },
          layout: {
            disabledOpacity: "0.4", // Slightly transparent for disabled states
            radius: {
              small: "5px",
              medium: "8px",
              large: "12px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        // Extended Dark Theme
        "purple-dark": {
          extend: "dark", // Inherit from the default dark theme
          colors: {
            background: "#0D001A", // Dark background
            foreground: "#ffffff", // Light text color
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#C031E2",
              500: "#DD62ED", // Main purple for dark mode
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED", // Primary purple in dark mode
              foreground: "#ffffff",
            },
            secondary: {
              500: "#FFD700", // Accent yellow for dark mode
              foreground: "#000000", // Text on yellow
            },
            focus: "#F182F6", // Focus color for dark mode
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
