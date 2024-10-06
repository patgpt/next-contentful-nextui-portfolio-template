import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import HeroAnimation from "@/components/hero-animation";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroAnimation />
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Human&nbsp;</span>
        <span className={title({ color: "violet" })}>AI Enahanced&nbsp;</span>
        <br />
        <span className={title()}>Software Engineer</span>
        <div className={subtitle({ class: "mt-4" })}>
          Polglot, Fullstack Developer, and AI Enthusiast
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.linkedin}
        >
          <FaLinkedin />
          LinkedIn
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <FaGithub />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
