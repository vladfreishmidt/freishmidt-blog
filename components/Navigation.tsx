"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = ["/", "/blog", "/links"];

const NavLink = (props: any) => {
  return (
    <li>
      <Link
        href={props.pageLink}
        className={` p-2 mr-2 hover:text-gray-700 ${
          props.pathname === `${props.pageLink}`
            ? "text-gray-700 underline underline-offset-8"
            : "text-gray-500"
        }`}
      >
        {props.pageLink === "/" ? "home" : props.pageLink.replace("/", "")}
      </Link>
    </li>
  );
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center h-[60px]">
      <Link href="/">
        <Image src="/logo.svg" width={43} height={37} alt="freishmidt logo" />
      </Link>
      <ul className="flex justify-end items-center h-100">
        {links.map((link) => (
          <NavLink pageLink={link} pathname={pathname} key={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
