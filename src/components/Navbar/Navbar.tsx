import { Button } from "@/components/ui/button";
import { BiSolidCylinder } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-dark-white py-3 px-2.5 sm:px-0 xxl:px-10 border-b border-light-gray">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-dark-black flex items-center gap-4">
            <span>
              <BiSolidCylinder />
            </span>
            <p className="font-bold text-[18px] leading-[23px]">BuildRight</p>
          </Link>

          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary-blue"
                    : undefined +
                      ` font-medium text-[14px] leading-[21px] text-dark-black hover:text-primary-blue transition-all`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <Button
                asChild
                className="px-4 rounded-[8px] text-[14px] leading-[21px] hover:text-dark-white font-bold relative z-10 after:content-['Login'] after:opacity-0 hover:after:opacity-100 after:flex after:items-center after:justify-center after:absolute after:w-full after:h-0 after:bg-primary-blue after:bottom-0 hover:after:h-full after:rounded-[8px] after:transition-all after:duration-300 after:ease-in-out [&.active]:after:content-['Login'] [&.active]:after:opacity-100 [&.active]:after:flex [&.active]:after:items-center [&.active]:after:justify-center [&.active]:after:absolute [&.active]:after:w-full [&.active]:after:bg-primary-blue [&.active]:after:bottom-0 [&.active]:after:h-full [&.active]:after:rounded-[8px] [&.active]:after:transition-all [&.active]:after:duration-300 [&.active]:after:ease-in-out"
              >
                <NavLink to="/login">Login</NavLink>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
