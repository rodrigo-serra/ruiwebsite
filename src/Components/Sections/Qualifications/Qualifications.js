import React, { Component } from 'react'
import './Qualifications.css';

export default class Qualifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "work"
        }
        this.clickEdu = this.clickEdu.bind(this);
    }

    clickEdu(idT, idC){
        
        let targetDataAttribute = document.getElementById(idT);
        let tabs = document.querySelectorAll("[data-target]");

        let contentDataAttribute = document.getElementById(idC);
        let tabContents = document.querySelectorAll("[data-content]");

        // Work on data-content
        // Remove qualification__active from all elements with the [data-content] data attribute
        tabContents.forEach(e => e.classList.remove("qualification__active"));
        // Add qualification__active to the target element, i.e., id="work" or id="education"
        contentDataAttribute.classList.add("qualification__active");

        // Work on data-target
        // Remove qualification__active from all elements with a [data-target] data attribute
        tabs.forEach(e => e.classList.remove("qualification__active"));
        targetDataAttribute.classList.add("qualification__active");
    }
    
    render() {
        return (
            <div>
                <h2 className="section__title">Qualifications</h2>
                <span className="section__subtitle">
                    <i className="uil uil-brain"></i>
                </span>

                <div className="qualification__container container">
                    <div className="qualification__tabs">
                        <div className="qualification__button button--flex qualification__active" data-target="#education" id="qualification-edu" onClick={() => this.clickEdu("qualification-edu", "education")}>
                            <i className="uil uil-graduation-cap qualification__icon"></i>
                            Education
                        </div>

                        <div className="qualification__button button--flex" data-target="#work" id="qualification-work" onClick={() => this.clickEdu("qualification-work", "work")}>
                            <i className="uil uil-briefcase-alt qualification__icon"></i>
                            Work
                        </div>
                    </div>
                    <div className="qualification__sections">
                        <QualificationEdu />
                        <QualificationWork />
                    </div>
                </div>
            </div>
        )
    }
}

function QualificationEdu() {
    return (
        <div className="qualification__content qualification__active" data-content id="education">
            {/* <!-- QUALIFICATION 1 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">High School</h3>
                    <span className="qualification__subtitle">Escola Básica e Secundária de Velas</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2011 - 2014
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* <!-- QUALIFICATION 2 --> */}
            <div className="qualification__data">
                <div></div>
                
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">M.Sc. in Electrical and Computer Enginnering</h3>
                    <span className="qualification__subtitle">IST - Instituto Superior Técnico</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2014 - 2019
                    </div>
                </div>
            </div>

            {/* <!-- QUALIFICATION 3 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Erasmus Program</h3>
                    <span className="qualification__subtitle">DTU - Techical University of Denmark</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2018
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder-2"></span>
                    <span className="qualification__line-2"></span>
                </div>
            </div>

            {/* <!-- QUALIFICATION 4 --> */}
            <div className="qualification__data">
                <div></div>

                <div>
                    <span className="qualification__rounder"></span>
                    {/* <!-- <span className="qualification__line"></span> --> */}
                </div>

                <div>
                    <h3 className="qualification__title">PhD Thesis (Robotics)</h3>
                    <span className="qualification__subtitle">IST - Instituto Superior Técnico</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2021 - Current
                    </div>
                </div>
            </div>
        </div>
    );
}

function QualificationWork() {
    return (
        <div className="qualification__content" data-content id="work">
            {/* <!-- QUALIFICATION 2.1 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Intern</h3>
                    <span className="qualification__subtitle">Aquarius Travel Agency</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        July 2015
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* <!-- QUALIFICATION 2.2 --> */}
            <div className="qualification__data">
                <div></div>
                
                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>

                <div>
                    <h3 className="qualification__title">Research Engineer</h3>
                    <span className="qualification__subtitle">ISR - Institute for Systems and Robotics</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2019 - 2020
                    </div>
                </div>
            </div>

            {/* <!-- QUALIFICATION 2.3 --> */}
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Teaching Assistant</h3>
                    <span className="qualification__subtitle">IST - Instituto Superior Técnico</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2020 - 2021
                    </div>
                </div>

                <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification__line"></span>
                </div>
            </div>

            {/* <!-- QUALIFICATION 2.4 --> */}
            <div className="qualification__data">
                <div></div>
                
                <div>
                    <span className="qualification__rounder"></span>
                    {/* <span className="qualification__line"></span> */}
                </div>

                <div>
                    <h3 className="qualification__title">Thesis Supervisor</h3>
                    <span className="qualification__subtitle">IST - Instituto Superior Técnico</span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>
                        2019 - Current
                    </div>
                </div>
            </div>
        </div>
    );
}