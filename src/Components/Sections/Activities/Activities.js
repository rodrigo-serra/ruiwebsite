import React, { Component } from 'react'
import './Activities.css'

export default class Activities extends Component {
    constructor(props){
        super(props);
        this.openActivity = this.openActivity.bind(this);
    }
    
    openActivity(id) {
        
        let activitiesContent = document.getElementsByClassName("activities__content");
        let activitiesHeader = document.getElementById(id);

        let previousState = activitiesHeader.parentNode.className;

        // Close all elements when a user clicks in an arrow
        for(let i = 0; i < activitiesContent.length; i++) {
            activitiesContent[i].className = "activities__content activities__close"
        }

        // Opens the desired element if the previous state was closed
        if(previousState === "activities__content activities__close") {
            activitiesHeader.parentNode.className = "activities__content activities__open";
        }

    }

    render() {
        return (
            <div>
                <h2 className="section__title">Activities</h2>
                <span className="section__subtitle">
                    <i className="uil uil-cog"></i>
                </span>

                <div className="activities__container container grid">
                    <div>
                        {/* <!-- SKILL 1 --> */}
                        <div className="activities__content activities__close">
                            <div className="activities__header" onClick={() => this.openActivity("activities__header-1")} id="activities__header-1">
                                <i className="uil uil-book-reader activities__icon"></i>
                                <div>
                                    <h1 className="activities__title">Supervision</h1>
                                    {/* <span className="activities__subtitle">More than 4 years</span> */}
                                </div>
                                <i className="uil uil-angle-down activities__arrow"></i>
                            </div>

                            <div className="activities__list grid">
                                <div className="activities__data activities__data-initial">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Thesis Title:</p>
                                        <p className="activities__info-text">People Recognition and Identification in Service Robots</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Co-supervisor:</p>
                                        <p className="activities__info-text">Vicente Pinto</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Degree and Institution:</p>
                                        <p className="activities__info-text">MEEC, IST</p>
                                    </div>

                                    <p className="activities__info-date">(2021/03/01 - Current)</p>
                                </div>

                                <div className="activities__separator"></div>

                                <div className="activities__data activities__data-last">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Thesis Title:</p>
                                        <p className="activities__info-text">Conversational skills for a service mobile robot targeting a STEM context</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Co-supervisor:</p>
                                        <p className="activities__info-text">Verónica Spelbrink</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Degree and Institution:</p>
                                        <p className="activities__info-text">MIEC, IST</p>
                                    </div>

                                    <p className="activities__info-date">(2021/03/01 - Current)</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- SKILL 2 --> */}
                        <div className="activities__content activities__close">
                            <div className="activities__header" onClick={() => this.openActivity("activities__header-2")} id="activities__header-2">
                                <i className="uil uil-nerd activities__icon"></i>
                                <div>
                                    <h1 className="activities__title">Teaching Assistant</h1>
                                    {/* <span className="activities__subtitle">More than 2 years</span> */}
                                </div>
                                <i className="uil uil-angle-down activities__arrow"></i>
                            </div>

                            <div className="activities__list grid">
                                <div className="activities__data activities__data-initial activities__data-last">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Course:</p>
                                        <p className="activities__info-text">Autonomous Systems</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Universidade de Lisboa, Instituto Superior Técnico, Portugal</p>
                                    </div>

                                    <p className="activities__info-date">(2020/09/21 - 2021/01/27)</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                
                    <div>
                        {/* <!-- SKILL 3 --> */}
                        <div className="activities__content activities__close">
                            <div className="activities__header" onClick={() => this.openActivity("activities__header-3")} id="activities__header-3">
                                <i className="uil uil-award activities__icon"></i>
                                <div>
                                    <h1 className="activities__title">Awards</h1>
                                    {/* <span className="activities__subtitle">More than 2 years</span> */}
                                </div>
                                <i className="uil uil-angle-down activities__arrow"></i>
                            </div>

                            <div className="activities__list grid">
                                <div className="activities__data activities__data-initial activities__data-last">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Name:</p>
                                        <p className="activities__info-text">MBZIRC2020 Challenge 3 Winner</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Khalifa University of Science and Technology, United Arab Emirates</p>
                                    </div>

                                    <p className="activities__info-date">(2020)</p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- SKILL 4 --> */}
                        <div className="activities__content activities__close">
                            <div className="activities__header" onClick={() => this.openActivity("activities__header-4")} id="activities__header-4">
                                <i className="uil uil-abacus activities__icon"></i>
                                <div>
                                    <h1 className="activities__title">Events</h1>
                                    {/* <span className="activities__subtitle">More than 2 years</span> */}
                                </div>
                                <i className="uil uil-angle-down activities__arrow"></i>
                            </div>

                            <div className="activities__list grid">
                                <div className="activities__data activities__data-initial">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">RoboCup@Home Virtual 2021</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Universidade de Lisboa, Instituto Superior Técnico, Portugal</p>
                                    </div>

                                    <p className="activities__info-date">(2021/06/22 - 2021/06/28)</p>
                                </div>

                                <div className="activities__separator"></div>
                                    
                                <div className="activities__data">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">SciRoc Camp GKK Symposium</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Universidade de Lisboa, Instituto Superior Técnico, Portugal</p>
                                    </div>

                                    <p className="activities__info-date">(2020/09/21 - 2020/09/21)</p>
                                </div>

                                <div className="activities__separator"></div>
                                
                                <div className="activities__data">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">MBZIRC2020</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Khalifa University of Science and Technology, United Arab Emirates</p>
                                    </div>

                                    <p className="activities__info-date">(2020/02/20 - 2020/02/25)</p>
                                </div>

                                <div className="activities__separator"></div>

                                <div className="activities__data">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">HackUPC - 36h Hackaton</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Universitat Politècnica de Catalunya, Spain</p>
                                    </div>

                                    <p className="activities__info-date">(2019/10/11 - 2019/10/13)</p>
                                </div>

                                <div className="activities__separator"></div>

                                <div className="activities__data">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">ERL Smart Cities</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Milton Keynes Council, United Kingdom</p>
                                    </div>

                                    <p className="activities__info-date">(2019/09/16 - 2019/09/22)</p>
                                </div>

                                <div className="activities__separator"></div>

                                <div className="activities__data activities__data-last">
                                    <div className="activities__info">
                                        <p className="activities__info-title">Event name:</p>
                                        <p className="activities__info-text">ValHacks - 24h Hackaton</p>
                                    </div>
                                    <div className="activities__info">
                                        <p className="activities__info-title">Institution/Organization:</p>
                                        <p className="activities__info-text">Danmarks Tekniske Universitet, Denmark</p>
                                    </div>

                                    <p className="activities__info-date">(2018/04/21 - 2018/04/22)</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}
