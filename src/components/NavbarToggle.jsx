// NavbarToggle.jsx
import { useState } from "react";

const NavbarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsBlurred(!isBlurred);
  };

  return {
    isOpen,
    toggleMenu,
  };
};
export default NavbarToggle;
