// import { useRef, useState } from "react";
// import Logo from "../assets/img/logo.svg";
// import { Heart, LucideMenu, User2 } from "lucide-react";
// import { useOnClickOutside } from "../hooks/useOnClickOutside";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const dropRef = useRef<HTMLDivElement>(null);
//   const mobileDrofRef = useRef<HTMLDivElement>(null);
//   useOnClickOutside(dropRef, () => setToggle(false));



//   return (
//     <nav className="md:w-full sticky inset-x-0 h-16 flex items-center justify-between p-5 z-20 lg:py-5 lg:px-10 uppercase text-sm bg-white">
//      <img src={Logo} alt="logo" className="h-full" />


//      <div className="hidden md:flex items-center gap-3 lg:gap-5 ">
//         <span>Home</span>
//         <span>Shop</span>
//         <span>About us</span>
//         <span>Blog</span>
//       </div>

//       <div>
//         <LucideMenu className="md:hidden" />
//         {mobileDrofRef && (
//           <div
//             className={`${
//               toggle ? "scale-y-100" : "scale-y-0"
//             } origin-top transition-all duration-300 ease-in-out absolute top-16 z-20 w-full left-0 bg-white flex flex-col items-center gap-3 py-3`}
//             ref={mobileDrofRef}
//           >
//             <span>Home</span>
//             <span>Shop</span>
//             <span>About us</span>
//             <span>Blog</span>
//           </div>
//         )

//         }
        

//       </div>

//       <div className="hidden lg:flex items-center gap-5 ">
//         <Heart className="size-4" />
//         <User2 className="size-4" />
//         <span className="">profile</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { useRef, useState } from "react";
import Logo from "../assets/img/logo.svg";
import { Heart, LucideMenu, User2 } from "lucide-react";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useOnClickOutside(mobileMenuRef, () => setToggle(false));

  return (
    <nav className="md:w-full sticky inset-x-0 h-16 flex items-center justify-between p-5 lg:py-5 lg:px-10 uppercase text-sm bg-white">
      {/* Logo */}
      <img src={Logo} alt="logo" className="h-full" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center ml-28 gap-3 lg:gap-10">
        <span>Home</span>
        <span>Shop</span>
        <span>About us</span>
        <span>Blog</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="relative md:hidden right-5">
        <LucideMenu className="cursor-pointer" onClick={() => setToggle(!toggle)} />
        {/* Mobile Dropdown Menu */}
        {toggle && (
          <div
            ref={mobileMenuRef}
            className="origin-top transition-transform duration-300 ease-in-out absolute top-6 z-20 left-0 bg-white flex flex-col items-center gap-3 py-3 shadow-lg"
          >
            <span onClick={() => setToggle(false)} className="w-full">Home</span>
            <span onClick={() => setToggle(false)} className="w-full">Shop</span>
            <span onClick={() => setToggle(false)} className="w-full">About us</span>
            <span onClick={() => setToggle(false)} className="w-full">Blog</span>
          </div>
        )}
      </div>

      {/* Profile and Icons */}
      <div className="hidden lg:flex items-center gap-5">
        <Heart className="w-5 h-5" />
        <User2 className="w-5 h-5" />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
