import { useRef, useState } from "react";
import Logo from "../assets/img/logo.svg";
import { Heart, LucideMenu, User2 } from "lucide-react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(mobileMenuRef, () => setToggle(false));

  return (
    <nav className="md:w-full sticky z-3 inset-x-0 h-16 flex items-center justify-between p-5 lg:py-5 lg:px-10 uppercase text-sm bg-white">
      <img src={Logo} alt="logo" className="h-full" />

      <div className="hidden md:flex items-center ml-28 gap-3 lg:gap-10">
        <span>Home</span>
        <span>Shop</span>
        <span>About us</span>
        <span>Blog</span>
      </div>

      <div className="flex flex-col items-start justify-start relative md:hidden ">
        <LucideMenu className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        {toggle && (
          <div
            ref={mobileMenuRef} 
            className="absolute top-6 right-0 w-40 bg-white flex flex-col p-5 gap-2 border rounded-lg shadow-lg"
          >
            <span onClick={() => setToggle(false)} className="w-full">Home</span>
            <span onClick={() => setToggle(false)} className="w-full">Shop</span>
            <span onClick={() => setToggle(false)} className="w-full">About us</span>
            <span onClick={() => setToggle(false)} className="w-full">Blog</span>
          </div>
        )}
      </div>

      <div className="hidden lg:flex items-center gap-5">
        <Heart className="w-5 h-5" />
        <User2 className="w-5 h-5" />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
