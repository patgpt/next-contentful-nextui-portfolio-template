import Image from "next/image";

export default function PFPAvatar() {
  return (
    <Image
      alt="Patrick Kelly Portfolio Image"
      className="rounded-full border-4 border-primary-500 shadow-2xl mb-4"
      fetchPriority="high"
      height={160}
      src="/pfp.webp"
      width={160}
    />
  );
}
