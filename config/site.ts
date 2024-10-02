export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Patrick Kelly",
  description:
    "Showcasing the projects and skills of Patrick Kelly, a passionate developer.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  links: {
    github: "https://github.com/patgpt",
    twitter: "https://twitter.com/AGIManifesto",
    linkedin: "https://linkedin.com/in/patgpt",
    portfolio: "https://patgpt.dev",
  },
};
