import { Link } from "@nextui-org/link";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/patgpt"
        title="Patrick Kelly's Patrick Kelly's GitHub"
      >
        <span className="text-default-600">Developed in 🇨🇦 by with ❤️ by </span>
        <p className="text-primary">Patrick Kelly</p>
        <FaGithub />
      </Link>
      <Copyright />
    </footer>
  );
}

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex">
      <p className="text-default-600 text-sm font-mono">
        © Nexpro {currentYear}
      </p>
    </div>
  );
}
