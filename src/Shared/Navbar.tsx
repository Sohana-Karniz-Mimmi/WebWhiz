import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center custom_container py-[32px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={113.859}
              height={24}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center lg:gap-[32px] gap-[20]">
          <ul className="flex items-center lg:gap-[32px] gap-[20px]">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-body text-sm font-normal leading-[160%] hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <Button variant="primary">Contact</Button>
        </div>

        <div className="flex lg:hidden gap-[24px]">
          <div className="hidden md:block lg:hidden">
            <Button className="" variant="primary">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
