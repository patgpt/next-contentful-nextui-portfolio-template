"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroAnimation() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 2,
        scrambleText: {
          text: "Turning Ideas into Reality with Code",
          chars:
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        },
        ease: "power2.inOut",
      });
    }
  }, []);

  return (
    <h1 ref={textRef} className="text-4xl font-bold">
      Loading...
    </h1>
  );
}
