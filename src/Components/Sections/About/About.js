import React from 'react'
import "./About.css"

export default function About() {
    return (
        <div>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">
                <i className="uil uil-user"></i>
            </span>

            <div className="about__container container grid">
                <img src="./Assets/imgs/IMG_4002.jpg" alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Born and raised in São Jorge, Azores, I've moved to Lisbon right after finishing 
                        High School to pursue my dream, a carrier in Robotics.
                    </p>
                    <p className="about__description">
                        I've enrolled in 
                        Eletrical&Computer Engineering at Instituto Superior Técnico, from which I've 
                        got my Master's Degree after five years of intensive personal and technical growth.
                    </p>
                    <p className="about__description">
                        At the present moment, I'm working on my PhD thesis whilst working 
                        on several other projects.
                    </p>

                </div>
            </div>
        </div>
    );
}
