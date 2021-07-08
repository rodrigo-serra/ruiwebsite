import React from 'react'
import './Header.css'

export default function Header() {
    
    const navMenu = document.getElementById("nav-menu");
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    console.log(navToggle);
    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if(navToggle) {
        console.log("Pressed!");
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if(navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll(".nav__link");

    navLink.forEach(element => element.addEventListener("click", () => {
        let navMenu = document.getElementById("nav-menu");
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove("show-menu");
    }));
    
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <span className="nav__logo">Rui</span>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" className="nav__link">
                                <i className="uil uil-graduation-cap nav__icon"></i> Education
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-robot nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#publications" className="nav__link">
                                <i className="uil uil-book-open nav__icon"></i> Publications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contacts
                            </a>
                        </li>
                        <i className="uil uil-times nav__close" id="nav-close"></i>
                    </ul>
                </div>

                <div className="nav__btns">
                    <i className="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}
