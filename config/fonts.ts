/**
 * This module imports and configures fonts for use in the application.
 * It uses Next.js's font optimization features to load Google Fonts.
 */

import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import {
  Fira_Code as FontMono,
  Nunito as FontSans,
  Quicksand as FontDisplay,
} from "next/font/google";

/**
 * Configuration for the sans-serif font (Nunito).
 * @type {NextFontWithVariable}
 */
const fontSans: NextFontWithVariable = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

/**
 * Configuration for the monospace font (Fira Code).
 * @type {NextFontWithVariable}
 */
const fontMono: NextFontWithVariable = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

/**
 * Configuration for the display font (Sixtyfour).
 * @type {NextFontWithVariable}
 */
const fontDisplay: NextFontWithVariable = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
  fallback: ["sans-serif"],
  weight: ["400"],
  display: "swap",
});

/**
 * Exports the configured fonts for use in the application.
 * @property {NextFontWithVariable} fontSans - The sans-serif font (Nunito).
 * @property {NextFontWithVariable} fontMono - The monospace font (Fira Code).
 * @property {NextFontWithVariable} fontDisplay - The display font (Sixtyfour).
 */
export { fontSans, fontMono, fontDisplay };
