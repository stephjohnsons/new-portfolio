'use client'

import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate
} from 'react-router-dom';
import '@/app/globals.css';

const links = [
  "Home",
  "About",
  "Works",
  "Skills",
  "Contact"
];

const Menu = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? "open" : "";

  const onClick = (href) => {
    navigate(href);
    toggleMenu();
  }

  return (
    <>
      <button
        className={`burger ${isOpen}`}
        onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => {
            <a
              key={link}
              className={`${isMenuOpen}` ? "appear" : ""}
              style={{
                animationDelay: `0.${index + 1}s`
              }}
              onClick={() => onClick(link)}
            >
              {link}
            </a>
          })}
        </nav>
      </div>
      <main className={`page ${isOpen}`}></main>
    </>
  )
}