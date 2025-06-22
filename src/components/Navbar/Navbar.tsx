import { Button } from "@/components/ui/button";
import { BiSolidCylinder } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-dark-white py-3 xxl:px-10 border-b border-light-gray">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="" className="text-dark-black flex items-center gap-4">
            <span>
              <BiSolidCylinder />
            </span>
            <p className="font-bold text-[18px] leading-[23px]">BuildRight</p>
          </a>

          <ul className="flex items-center gap-8">
            <li>
              <a
                href=""
                className="font-medium text-[14px] leading-[21px] text-dark-black hover:text-primary-blue transition-all"
              >
                Home
              </a>
            </li>
            <li>
              <Button
                asChild
                className="bg-primary-blue px-4 rounded-[8px] font-bold text-[14px] leading-[21px] text-dark-white hover:bg-primary-blue/90"
              >
                <a href="/login">Login</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
