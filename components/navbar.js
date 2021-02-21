import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu } from "antd";

const Navbar = () => {
   const [current, setCurrent] = useState("home");

   const handleClick = (e) => {
      setCurrent(e.key);
   };

   return (
      <nav>
         <div className="logo">
            <Image src="/logo.png" width={148} height={77} />
         </div>
         <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{ borderBottom: 0 }}
         >
            <Menu.Item key="home">
               <Link href="/">
                  <a>Home</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="about">
               <Link href="/about">
                  <a>About</a>
               </Link>
            </Menu.Item>
            <Menu.Item key="users">
               <Link href="/users">
                  <a>Users</a>
               </Link>
            </Menu.Item>
         </Menu>
      </nav>
   );
};

export default Navbar;
