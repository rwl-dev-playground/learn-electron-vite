import { useLocation, useLinkClickHandler } from "react-router-dom";
import { Navbar } from "flowbite-react";

interface NavLinkProps {
  to: string;
  children: string;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(to);

  return (
    <span onClick={clickHandler}>
      <Navbar.Link href={to} active={location.pathname === to}>
        {children}
      </Navbar.Link>
    </span>
  );
};

export const LinkList = () => {
  return (
    <Navbar>
      <Navbar.Collapse>
        <NavLink to="/">TopPage</NavLink>
        <NavLink to="/second">SecondPage</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
