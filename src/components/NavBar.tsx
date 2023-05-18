import { useRouter } from "next/router";
import React, { FC } from "react";
import scss from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";

const NavBar: FC = () => {
  const { pathname } = useRouter();

  const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Users", path: "/users" },
  ];
  return (
    <>
      <div className={scss.nav}>
        <div className={scss.logo}>
          <Image src="/ua.png" width={60} height={60} alt="logo" />
        </div>
        <div className={scss.links}>
          {navigation.map(({ id, title, path }) => (
            <Link
              key={id}
              href={path}
              className={pathname === path ? scss.active : ""}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
