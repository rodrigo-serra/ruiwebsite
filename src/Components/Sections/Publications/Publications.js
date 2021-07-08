import React from 'react'
import './Publications.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles from the node_modules
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// Import Swiper core and required modules
import SwiperCore, {Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function Publications() {

    // From swiper
    // https://codesandbox.io/s/swiper-react-pagination-dynamic-forked-0bthx?file=/src/styles.css

    return (
        <div>
            <h2 className="section__title">Recent Publications</h2>
            <span className="section__subtitle">
                <i className="uil uil-book-open"></i>
            </span>

            <div className="publications__container container">
                <Swiper 
                    loop={true}
                    grabCursor={true}
                    spaceBetween={48}
                    pagination={{
                        "dynamicBullets": true,
                        "clickable": true,
                    }}
                    breakpoints={{
                        568: {
                            slidesPerView: 2
                        }
                    }}
                    className="mySwiper"    
                >
                    {/* <!-- Publication 1 --> */}
                    <SwiperSlide className="publications__content">
                        <div className="publications__data">
                            <div className="publications__header">
                                <h3 className="publications__name">A multipurpose mobile manipulator for autonomous firefighting and construction of outdoors structures</h3>
                            </div>
                        </div>

                        <p className="publications__type">Journal article</p>

                        <div className="publications__info-author">
                            <p className="publications__author">Authors</p>
                            <p className="publications__author-text">João Gonçalves, José Rosa, Rui Bettencourt, Alberto Vale, Pedro U. Lima</p>
                        </div>
                        
                        <div className="publicications__info-keywords">
                            <p className="publications__keywords">Keywords</p>
                            <p className="publications__keywords-text">Navigation, Localization, Service Robots, Smart Cities, Indoor Spaces, Guiding, People Following, Waypoint Navigation, Dynamic Goal</p>
                        </div>

                        <a href="https://ieeexplore.ieee.org/document/9429771" target="_blank" rel="noreferrer" className="button2 button--flex2">
                            Learn more<i className="uil uil-info-circle button__icon"></i>
                        </a>

                    </SwiperSlide>

                    {/* <!-- Publication 2 --> */}
                    <SwiperSlide className="publications__content">
                        <div className="publications__data">
                            <div className="publications__header">
                                <h3 className="publications__name">Multimodal Navigation for Autonomous Service Robots</h3>
                            </div>
                        </div>

                        <p className="publications__type">Conference paper</p>

                        <div className="publications__info-author">
                            <p className="publications__author">Authors</p>
                            <p className="publications__author-text">Rui Bettencourt, Pedro U. Lima</p>
                        </div>
                        
                        <div className="publicications__info-keywords">
                            <p className="publications__keywords">Keywords</p>
                            <p className="publications__keywords-text">Navigation, Localization, Service Robots, Smart Cities, Indoor Spaces, Guiding, People Following, Waypoint Navigation, Dynamic Goal</p>
                        </div>

                        <a href="https://ieeexplore.ieee.org/document/9429771" target="_blank" rel="noreferrer" className="button2 button--flex2">
                            Learn more<i className="uil uil-info-circle button__icon"></i>
                        </a>

                    </SwiperSlide>

                    {/* <!-- Publication 3 --> */}
                    <SwiperSlide className="publications__content">
                        <div className="publications__data">
                            <div className="publications__header">
                                <h3 className="publications__name">Multimodal Navigation for Autonomous Service Robots</h3>
                            </div>
                        </div>

                        <p className="publications__type">M.Sc. Thesis</p>

                        <div className="publications__info-author">
                            <p className="publications__author">Authors</p>
                            <p className="publications__author-text">Rui Bettencourt</p>
                        </div>
                        
                        <div className="publicications__info-keywords">
                            <p className="publications__keywords">Keywords</p>
                            <p className="publications__keywords-text">Navigation, Localization, Service Robots Indoor Spaces, Guiding, People Following, Waypoint Navigation, Dynamic Goal</p>
                        </div>

                        <a href="https://fenix.tecnico.ulisboa.pt/cursos/meec/dissertacao/1691203502343554" target="_blank" rel="noreferrer" className="button2 button--flex2">
                            Learn more<i className="uil uil-info-circle button__icon"></i>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
