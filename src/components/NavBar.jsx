import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.sass'
import { BsMenuAppFill, BsMenuButtonWideFill } from "react-icons/bs"

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior:"smooth"});
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <header className={scrolling ? "scrolled" : ""}>
        <div className="content">
            <nav className='menu'>
                <a onClick={() => scrollToSection("services")}>Serviços</a>
                <a onClick={() => scrollToSection("about-info")}>Sobre nós</a>
                <a onClick={() => scrollToSection("form")}>Contato</a>
            </nav>

            <div className={`menu-mobile ${menuOpen ? "active":""}`}>
                <button className='btn' onClick={toggleMenu}>
                    {menuOpen ? <BsMenuButtonWideFill size={25}/> : <BsMenuAppFill size={25}/>}
                </button>

                <nav className="nav-mobile">
                    <a onClick={() => scrollToSection("services")}>Serviços</a>
                    <a onClick={() => scrollToSection("about-info")}>Sobre nós</a>
                    <a onClick={() => scrollToSection("form")}>Contato</a>
                </nav>
            </div>
            
            <a href='/' className="logo">
                <img src='/img/k-logo.png' alt='letra K do logo.'/>
                <h1>RAFTERS</h1>
            </a>
        </div>    
    </header>
  )
}

export default NavBar;