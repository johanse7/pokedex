// Navbar.tsx
import CloseIcon from "@/assets/icons/close.svg?react";
import BurgerMenuIcon from "@/assets/icons/hamburger-menu.svg?react";
import { NAV_LINKS } from "@/helpers";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "../Logo/Logo";
import styles from "./Navbar.module.css";

type NavbarProps = {
  className?: string;
};

export const Navbar = ({ className = "" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev;
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      />

      <nav
        className={`${styles.navbar} ${className}`}
        role="navigation"
        aria-label="Navigation"
      >
        <div className={`${styles.container} content-area`}>
          <Link to="/">
            <Logo />
          </Link>

          <div className={styles.links} aria-hidden={false}>
            <NavLinks />
          </div>

          <Button
            variant="outline"
            className={styles.menuButton}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
          >
            {isOpen ? (
              <CloseIcon width={32} height={32} />
            ) : (
              <BurgerMenuIcon width={32} height={32} />
            )}
          </Button>
        </div>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${
            isOpen ? styles.mobileMenuOpen : ""
          }`}
          aria-hidden={!isOpen}
        >
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      </nav>
    </>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    {NAV_LINKS.map((link) => (
      <Link key={link.name} to={link.path} onClick={onClick}>
        {link.name}
      </Link>
    ))}
  </>
);
