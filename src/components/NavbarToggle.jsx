// NavbarToggle.jsx
import { useState } from "react";

const NavbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleMenu,
  };
};
export default NavbarToggle;
