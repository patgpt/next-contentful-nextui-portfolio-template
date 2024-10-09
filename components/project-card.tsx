"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";

function ProjectCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="relative bg-background rounded-lg p-6 transition-shadow duration-300 hover:shadow-2xl group">
      {/* Glowing Outline */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary-500 group-hover:animate-glow" />

      <h3 className="text-2xl font-semibold text-primary relative">{title}</h3>
      <p className="text-secondary mt-2 relative">{description}</p>

      <Button
        as={Link}
        className="inline-block mt-4 px-4 py-2 font-medium rounded-lg transition-transform duration-300 hover:-translate-y-1 relative"
        color="secondary"
        href={href}
        size="md"
        variant="solid"
      >
        Learn more →
      </Button>
    </div>
  );
}

export default ProjectCard;
