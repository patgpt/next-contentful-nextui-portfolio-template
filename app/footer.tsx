import { Link } from "@nextui-org/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://github.com/patgpt"
        title="Patrick Kelly's Patrick Kelly's GitHub"
      >
        <span className="text-default-600">Developed by with ❤️ by </span>
        <p className="text-primary">Patrick Kelly in 🇨🇦</p>
      </Link>
    </footer>
  );
}
