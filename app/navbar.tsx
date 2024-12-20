// "use client"
// import Link from "next/link";
// import React, { useState } from 'react';
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header id="header">
//       <div id="nav">
//         <h2>Nida Noman</h2>
//       </div>
//       {/* Navbar Menu */}
//       <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//         <li><Link href="/">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/skills">Skills</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//       </ul>

//       {/* Hamburger Icon */}
//       <AiOutlineMenu 
//         className="hamburger-icon" 
//         onClick={toggleMenu} 
//         size={30} 
//       />
//     </header>
//   );
// }

// export default Navbar;

// "use client"
// import Link from "next/link";
// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header id="header">
//       <div id="nav">
//         <h2>Nida Noman</h2>
//       </div>

//       {/* Navbar Menu */}
//       <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//         <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//         <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
//         <li><Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
//         <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
//       </ul>

//       {/* Hamburger and Close Icon */}
//       {menuOpen ? (
//         <AiOutlineClose 
//           className="close-icon" 
//           onClick={toggleMenu} 
//           size={30} 
//         />
//       ) : (
//         <AiOutlineMenu 
//           className="hamburger-icon" 
//           onClick={toggleMenu} 
//           size={30} 
//         />
//       )}
//     </header>
//   );
// }

// export default Navbar;


"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <div id="nav">
        <h2>Nida Noman</h2>
      </div>

      {/* Navbar Menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Hamburger and Close Icon */}
      <div onClick={toggleMenu}>
        {menuOpen ? (
          <AiOutlineClose 
            className="close-icon" 
            size={30} 
          />
        ) : (
          <AiOutlineMenu 
            className="hamburger-icon" 
            size={30} 
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
