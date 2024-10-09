import { Link } from "@nextui-org/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center py-3 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Link
            isExternal
            className="flex items-center gap-1 text-current mb-2 sm:mb-0"
            href="https://github.com/patgpt"
            title="Patrick Kelly's GitHub"
          >
            <span className="text-default-600 text-sm sm:text-base">
              Developed in 🇨🇦 with ❤️ by{" "}
            </span>
            <p className="text-primary text-sm sm:text-base">Patrick Kelly</p>
            <FaGithub className="text-lg sm:text-xl" />
          </Link>
          <p className="text-default-600 text-xs sm:text-sm font-mono">
            © Nexpro {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
