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
                        Born and raised in <a className="about__description-link" href="https://www.google.com/maps/place/S%C3%A3o+Jorge/@34.75115,-26.1269267,5.67z/data=!4m5!3m4!1s0xb47b6bc0abe5a6f:0xd4e4a79ba647e427!8m2!3d38.6409678!4d-28.0303189" target="_blank" rel="noreferrer" >São Jorge</a>, Azores, I've moved to Lisbon right after finishing 
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
