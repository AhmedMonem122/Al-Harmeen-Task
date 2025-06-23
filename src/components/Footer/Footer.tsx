import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col items-center justify-center gap-6 leading-6 text-dark-blue">
      <ul className="">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline transition-all"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
      <p className="">@2024 BuildRight. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
