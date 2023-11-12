"use client"
import logo from "../../assets/header/Navbar/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname();

    const links: {name:string,path:string}[] = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Blog",
      path: "/blog"
    },
    {
      name: "Login",
      path: "/login"
    }
  ];

  return (
    <div className='fixed z-50 w-full bg-white px-20 flex justify-between items-center'>
      <Image src={logo} alt="the simpsons logo" />
      <ul className="flex gap-10">
        {links.map(({ name, path }: {name:string,path:string}) => (
          <li key={name}>
            <Link className={pathname === path ? 'font-extrabold' : ''} href={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
