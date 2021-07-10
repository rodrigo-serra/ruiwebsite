import React, { Component } from 'react'
import './Header.css'



export default class Header2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: 0
        }
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.getCurrentTheme = this.getCurrentTheme.bind(this);
        this.getCurrentIcon = this.getCurrentIcon.bind(this);
        this.darkTheme = this.darkTheme.bind(this);
    }

    openMenu() {
        let navMenu = document.getElementById("nav-menu");
        navMenu.classList.add("show-menu");
        this.setState({
            activeMenu: 1
        });
    }

    closeMenu() {
        let navMenu = document.getElementById("nav-menu");
        navMenu.classList.remove("show-menu");
        this.setState({
            activeMenu: 0
        });
    }

    getCurrentTheme() {
        return document.body.classList.contains("dark-theme") ? "dark" : "light";
    }

    getCurrentIcon() {
        let themeButton = document.getElementById("theme-button");
        return themeButton.classList.contains("uil-sun") ? "uil-moon" : "uil-sun";
    }

    darkTheme() {
        
        let themeButton = document.getElementById("theme-button");

        let darkTheme = "dark-theme";
        let iconTheme ="uil-sun";

        // Add/Remove the dark/icon theme
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);

        // Save the theme and the current icon that user choose
        localStorage.setItem("selected-theme", this.getCurrentTheme());
        localStorage.setItem("selected-icon", this.getCurrentIcon());

        // Change favicon
        let favicon = document.getElementById("favicon");
        // console.log(favicon);
        if(this.getCurrentTheme() === "dark") {
            favicon.href = "./Assets/imgs/ruiico-dark.ico";
        } else {
            favicon.href = "./Assets/imgs/ruiico.ico";
        }

    }
    
    componentDidMount() {
        
        // SCROLL SECTIONS ACTIVE LINK 
        let sections = document.querySelectorAll("section[id]");

        window.addEventListener("scroll", () => {
        sections.forEach(current => {
                 let scrollY = window.pageYOffset;
                 let sectionHeight = current.offsetHeight;
                 let sectionTop = current.offsetTop - 50;
                 let sectionId = current.getAttribute("id");
        
                 if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                     document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
                 } else {
                     document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
                 }
             });
        });
        // CHANGE BACKGROUND HEADER
        window.addEventListener("scroll", () => {
            let nav = document.getElementById("header");
            // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
            let scrollY = window.pageYOffset;

            if(scrollY >= 80) {
                nav.classList.add("scroll-header");
            } else {
                nav.classList.remove("scroll-header");
            }
        });

        // DARK LIGHT THEME 
        let darkTheme = "dark-theme";
        let iconTheme ="uil-sun";
        let themeButton = document.getElementById("theme-button");
        // Previously selected topic (if user selected)
        let selectedTheme = localStorage.getItem("selected-theme");
        let selectedIcon = localStorage.getItem("selected-icon");

        if(selectedTheme) {
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
            themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);

            // Change favicon
             let favicon = document.getElementById("favicon");
             if(this.getCurrentTheme() === "dark") {
                 favicon.href = "./Assets/imgs/ruiico-dark.ico";
             } else {
                 favicon.href = "./Assets/imgs/ruiico.ico";
             }
        }
    }
    
    render() {
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
                                <a href="#about" className="nav__link" onClick={this.closeMenu}>
                                    <i className="uil uil-user nav__icon"></i> About
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#qualification" className="nav__link" onClick={this.closeMenu}>
                                    <i className="uil uil-brain nav__icon"></i> Qualifications
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" className="nav__link" onClick={this.closeMenu}>
                                    <i className="uil uil-robot nav__icon"></i> Projects
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#publications" className="nav__link" onClick={this.closeMenu}>
                                    <i className="uil uil-book-open nav__icon"></i> Publications
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#activities" className="nav__link" onClick={this.closeMenu}>
                                    <i className="uil uil-cog nav__icon"></i> Activities
                                </a>
                            </li>
                            <i className="uil uil-times nav__close" id="nav-close" onClick={this.closeMenu}></i>
                        </ul>
                    </div>

                    <div className="nav__btns">
                        <i className="uil uil-moon change-theme" onClick={this.darkTheme} id="theme-button"></i>

                        <div className="nav__toggle" id="nav-toggle" onClick={this.openMenu}>
                            <i className="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
