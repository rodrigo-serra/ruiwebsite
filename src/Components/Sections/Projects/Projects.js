import React, { Component } from 'react'
import "./Projects.css"

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.loadModal = this.loadModal.bind(this);
    }

    loadModal(id, ctr){
        let modal = document.getElementById(id);
        if(ctr){
            modal.classList.add("active-modal");
        }else{
            modal.classList.remove("active-modal");
        }
    }

    render() {
        return (
            <div>
                <h2 className="section__title">Projects</h2>
                <span className="section__subtitle">
                    <i className="uil  uil-robot"></i>
                </span>

                <div className="projects__container container grid">
                {/* <!-- PROJECT 1 --> */}
                    <div className="projects__content">
                        <div>
                            {/* <i className="uil uil-web-grid projects__icon"></i> */}
                            {/* https://icons8.com/icons/set/drone */}
                            {/* <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M26.14993,32.0625l-1.40378,5.34375h-24.74615v8.01563l29.39063,-2.67187l29.39063,2.67188v-8.01562h-24.74616l-1.40378,-5.34375zM138.36868,32.0625l-1.40378,5.34375h-24.74616v8.01563l29.39063,-2.67187l29.39063,2.67188v-8.01562h-24.74616l-1.40378,-5.34375zM24.04688,48.09375v13.35938v2.67188v8.01563c8.64489,1.85248 15.08926,3.99149 20.31042,6.18393c-3.08333,9.46421 -6.95105,27.37471 -6.95105,57.94107h8.01563c1.93248,-30.91961 9.40611,-44.93291 13.422,-50.39511c5.3721,3.17347 10.06762,5.79586 17.44024,6.97192l0.26615,1.33594c0.54239,2.71997 2.93042,4.681 5.70383,4.681h3.24591h3.24591c2.77341,0 5.16143,-1.96103 5.70383,-4.681l0.26615,-1.33594c7.37262,-1.17606 12.06814,-3.79846 17.44024,-6.97192c4.01589,5.4622 11.48952,19.4755 13.422,50.39511h8.01563c0,-30.56636 -3.86772,-48.47686 -6.95105,-57.94107c5.22117,-2.19244 11.66553,-4.33145 20.31042,-6.18393v-10.6875v-13.35937h-10.6875v13.35938h-50.76562h-50.76562v-13.35937z"></path>
                                    </g>
                                </g>
                            </svg> */}
                            {/* durable3.svg */}
                            <svg className="projects__icon3" width="85" height="85" viewBox="0 0 200 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Durable2">
                                    <path id="Vector 12" d="M173 156V171"  />
                                    <path id="Vector 10" d="M164.392 119L171.928 145.138"  />
                                    <g id="Ellipse 2">
                                        <mask id="path-3-inside-1">
                                        <path d="M133.05 159.386C138.696 153.108 142.348 145.357 143.558 137.083C144.767 128.808 143.483 120.368 139.862 112.796C136.242 105.223 130.441 98.8463 123.17 94.4448C115.899 90.0433 107.473 87.8082 98.9224 88.0129C90.3721 88.2176 82.0682 90.8532 75.0264 95.5974C67.9847 100.342 62.5104 106.988 59.2733 114.725C56.0361 122.462 55.1765 130.953 56.7994 139.16C58.4224 147.366 62.4577 154.933 68.4116 160.933L76.236 153.519C71.7568 149.005 68.7211 143.312 67.5001 137.138C66.2792 130.965 66.9259 124.577 69.3612 118.756C71.7965 112.936 75.9148 107.936 81.2123 104.367C86.5098 100.797 92.7569 98.8147 99.1894 98.6607C105.622 98.5067 111.961 100.188 117.431 103.499C122.901 106.811 127.265 111.608 129.989 117.305C132.713 123.002 133.679 129.351 132.768 135.576C131.858 141.801 129.111 147.632 124.864 152.355L133.05 159.386Z"/>
                                        </mask>
                                        <path d="M133.05 159.386C138.696 153.108 142.348 145.357 143.558 137.083C144.767 128.808 143.483 120.368 139.862 112.796C136.242 105.223 130.441 98.8463 123.17 94.4448C115.899 90.0433 107.473 87.8082 98.9224 88.0129C90.3721 88.2176 82.0682 90.8532 75.0264 95.5974C67.9847 100.342 62.5104 106.988 59.2733 114.725C56.0361 122.462 55.1765 130.953 56.7994 139.16C58.4224 147.366 62.4577 154.933 68.4116 160.933L76.236 153.519C71.7568 149.005 68.7211 143.312 67.5001 137.138C66.2792 130.965 66.9259 124.577 69.3612 118.756C71.7965 112.936 75.9148 107.936 81.2123 104.367C86.5098 100.797 92.7569 98.8147 99.1894 98.6607C105.622 98.5067 111.961 100.188 117.431 103.499C122.901 106.811 127.265 111.608 129.989 117.305C132.713 123.002 133.679 129.351 132.768 135.576C131.858 141.801 129.111 147.632 124.864 152.355L133.05 159.386Z"/>
                                    </g>
                                    <g id="Ellipse 3">
                                        <mask id="path-4-inside-2">
                                        <path d="M122.526 126.906C123.51 131.622 122.954 136.529 120.94 140.906C118.926 145.282 115.56 148.897 111.338 151.217C107.117 153.538 102.261 154.442 97.4871 153.797C92.7128 153.152 88.2716 150.992 84.8171 147.634C81.3626 144.276 79.0771 139.898 78.297 135.143C77.5168 130.389 78.2832 125.51 80.4834 121.224C82.6836 116.939 86.2013 113.472 90.5191 111.335C94.8368 109.198 99.7265 108.503 104.469 109.353L104.004 111.944C99.817 111.194 95.4994 111.807 91.6868 113.694C87.8742 115.581 84.768 118.642 82.8253 122.427C80.8825 126.211 80.2058 130.519 80.8946 134.717C81.5835 138.915 83.6016 142.781 86.6519 145.746C89.7023 148.711 93.6239 150.619 97.8396 151.189C102.055 151.758 106.343 150.96 110.07 148.911C113.798 146.861 116.77 143.67 118.548 139.805C120.327 135.941 120.818 131.607 119.949 127.443L122.526 126.906Z"/>
                                        </mask>
                                        <path d="M122.526 126.906C123.51 131.622 122.954 136.529 120.94 140.906C118.926 145.282 115.56 148.897 111.338 151.217C107.117 153.538 102.261 154.442 97.4871 153.797C92.7128 153.152 88.2716 150.992 84.8171 147.634C81.3626 144.276 79.0771 139.898 78.297 135.143C77.5168 130.389 78.2832 125.51 80.4834 121.224C82.6836 116.939 86.2013 113.472 90.5191 111.335C94.8368 109.198 99.7265 108.503 104.469 109.353L104.004 111.944C99.817 111.194 95.4994 111.807 91.6868 113.694C87.8742 115.581 84.768 118.642 82.8253 122.427C80.8825 126.211 80.2058 130.519 80.8946 134.717C81.5835 138.915 83.6016 142.781 86.6519 145.746C89.7023 148.711 93.6239 150.619 97.8396 151.189C102.055 151.758 106.343 150.96 110.07 148.911C113.798 146.861 116.77 143.67 118.548 139.805C120.327 135.941 120.818 131.607 119.949 127.443L122.526 126.906Z"/>
                                    </g>
                                    <path id="Ellipse 4" d="M106 131.5C106 133.905 103.845 136 101 136C98.1549 136 96 133.905 96 131.5C96 129.095 98.1549 127 101 127C103.845 127 106 129.095 106 131.5Z"  />
                                    <path id="Ellipse 8" d="M178 150C178 152.688 175.614 155 172.5 155C169.386 155 167 152.688 167 150C167 147.312 169.386 145 172.5 145C175.614 145 178 147.312 178 150Z"  />
                                    <path id="Ellipse 7" d="M32 150C32 152.688 29.6144 155 26.5 155C23.3856 155 21 152.688 21 150C21 147.312 23.3856 145 26.5 145C29.6144 145 32 147.312 32 150Z"  />
                                    <path id="Ellipse 6" d="M168 114C168 116.688 165.614 119 162.5 119C159.386 119 157 116.688 157 114C157 111.312 159.386 109 162.5 109C165.614 109 168 111.312 168 114Z"  />
                                    <path id="Ellipse 5" d="M44 114C44 116.688 41.6144 119 38.5 119C35.3856 119 33 116.688 33 114C33 111.312 35.3856 109 38.5 109C41.6144 109 44 111.312 44 114Z"  />
                                    <path id="Vector 5" d="M103 126.861C105.311 123.436 110.193 116.67 111.233 117.013C112.533 117.441 116 120.01 116 120.866C116 121.552 115.422 122.579 115.133 123.008C113.256 125.577 109.327 130.801 108.633 131.144C107.94 131.486 106.611 131.857 106.033 132" />
                                    <path id="Vector 6" d="M99.7652 135.998C97.4119 139.429 92.447 146.2 91.4132 145.84C90.121 145.391 86.6941 142.749 86.7055 141.884C86.7146 141.191 87.3052 140.161 87.5994 139.732C89.5085 137.161 93.5011 131.934 94.1979 131.597C94.8947 131.26 96.2265 130.903 96.8052 130.766" />
                                    <path id="Vector 7" d="M58 120L44 115"  />
                                    <path id="Vector 9" d="M35.8857 118.965L28 145"  />
                                    <path id="Vector 8" d="M142 120L156.914 115"  />
                                    <path id="Vector 11" d="M26.5 155.5V170.5"  />
                                </g>
                            </svg>
                            <h3 className="projects__title">DURABLE</h3>
                        </div>

                        <span className="button button--flex button--small button--link projects__button" onClick={() => this.loadModal("projects__modal-1", true)}>
                            View More
                            <i className="uil uil-arrow-right button__icon projects__button-arrow"></i>
                        </span>

                        <div className="projects__modal" id="projects__modal-1">
                            <div className="projects__modal-content">
                                <h4 className="projects__modal-title">DURABLE</h4>
                                <p className="projects__modal-date">2020 - Current</p>
                                <a href="https://www.durableproject.eu/" target="_blank" rel="noreferrer">
                                    <i className="uil uil-info-circle projects__modal-link"></i>
                                </a>
                                <i className="uil uil-times projects__modal-close" onClick={() => this.loadModal("projects__modal-1", false)}></i>

                                <div className="projects__modal-projects grid">
                                    {/* OBJECTIVE */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-objective">
                                        <i className="uil uil-crosshair projects__modal-project-objective-icon"></i>
                                            Objective
                                        </p>
                                        <p className="projects__modal-project-objective-text">Accelerate the performance of renewable energies through the validation and demonstration of robotics technologies (aerial and ground robots cooperation) for operation and maintenance activities and solar energy systems.</p>
                                        {/* <p className="projects__modal-project-objective-font">Durable Website</p> */}
                                    </div>
                                    {/* POSITION */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-position">
                                        <i className="uil uil-hard-hat projects__modal-project-position-icon"></i>
                                            Position
                                        </p>
                                        <p className="projects__modal-project-position-text">Research Fellow</p>
                                    </div>
                                    {/* PARTNERS */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-partners">
                                        <i className="uil uil-users-alt projects__modal-project-partners-icon"></i>
                                            Partners
                                        </p>
                                        <ul className="projects__modal-project-partners-list">
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    EDP, Portugal
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    CATEC, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Universidad de Sevilla, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    University of West of England, United Kingdom
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Ingeteam Corporaci??n SA, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Centro de Investigacion en Tecnologias de Union Lortek, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Corporaci??n Tecnol??gia de Andaluc??a, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    ??cole sup??rieure des technologies industrielles avanc??es, France
                                                </p>
                                            </li>   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- PROJECT 2 --> */}
                    <div className="projects__content">
                        <div>
                            {/* <i className="uil uil-web-grid projects__icon"></i> */}
                            {/* https://icons8.com/icons/set/home-automation */}
                            {/* <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55" viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M85.37977,6.84c-0.72387,0.0258 -1.42087,0.28074 -1.99055,0.72809l-78.66,61.56c-0.96208,0.75399 -1.44874,1.96404 -1.2766,3.1742c0.17214,1.21016 0.97692,2.2365 2.11109,2.69231c1.13417,0.45581 2.42537,0.2718 3.38707,-0.48268l4.72922,-3.70055v89.92863c0.00019,1.88874 1.53126,3.41981 3.42,3.42h136.8c1.88874,-0.00019 3.41981,-1.53126 3.42,-3.42v-89.92863l4.72922,3.70055c0.9617,0.75443 2.25287,0.9384 3.38701,0.48259c1.13414,-0.45581 1.9389,-1.48213 2.11105,-2.69225c0.17215,-1.21013 -0.31446,-2.42015 -1.2765,-3.17416l-78.66,-61.56c-0.63453,-0.49821 -1.42475,-0.7561 -2.23102,-0.72809zM85.5,14.6018l64.98,50.85246v91.86574h-129.96v-91.86574zM85.5,68.4c-18.49878,0 -35.28045,7.41445 -47.60613,19.38445l4.8361,4.82941c11.08764,-10.73196 26.1591,-17.37387 42.77004,-17.37387c16.61094,0 31.6824,6.64191 42.77004,17.37387l4.8361,-4.82941c-12.32568,-11.97 -29.10735,-19.38445 -47.60613,-19.38445zM85.5,85.5c-13.78602,0 -26.28874,5.49311 -35.5159,14.36801l4.8361,4.83609c7.9857,-7.64028 18.78162,-12.3641 30.6798,-12.3641c11.89818,0 22.6941,4.72382 30.6798,12.3641l4.8361,-4.83609c-9.22716,-8.8749 -21.72988,-14.36801 -35.5159,-14.36801zM85.5,102.6c-9.06984,0 -17.30371,3.57176 -23.43234,9.35156l4.83609,4.8361c4.8906,-4.54176 11.41425,-7.34766 18.59625,-7.34766c7.182,0 13.70907,2.80247 18.59625,7.34766l4.82941,-4.82942c-6.12522,-5.78322 -14.35582,-9.35824 -23.42566,-9.35824zM85.5,119.7c-3.77763,0 -6.84,3.06237 -6.84,6.84c0,3.77763 3.06237,6.84 6.84,6.84c3.77763,0 6.84,-3.06237 6.84,-6.84c0,-3.77763 -3.06237,-6.84 -6.84,-6.84z"></path>
                                    </g>
                                </g>
                            </svg> */}
                            {/* sciroc4.svg */}
                            <svg className="projects__icon3" width="85" height="85" viewBox="0 0 200 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SciRoc3">
                                    <path id="Vector 13" d="M0 170H12.7972V135.139L35.1923 110.532V157.696H24.3147V144.025L55.028 110.532L82.542 144.025V165.899H68.465V86.6076H101.098V152.911H90V78L118.374 62V170H183" />
                                    <g id="Robot">
                                        <rect id="Rectangle 1" x="142.025" y="97.75" width="40.4939" height="31.3333" rx="3.5" />
                                        <path id="Ellipse 9" d="M187.401 113.417C187.401 115.594 187 117.542 186.373 118.926C185.725 120.356 184.933 121 184.24 121C184.099 121 184.006 120.96 183.929 120.895C183.842 120.822 183.748 120.692 183.662 120.472C183.486 120.022 183.397 119.336 183.371 118.444C183.346 117.565 183.382 116.542 183.425 115.446C183.429 115.356 183.433 115.266 183.436 115.175C183.477 114.165 183.519 113.104 183.519 112.069C183.519 110.939 183.469 109.948 183.425 109.108L183.425 109.104C183.381 108.256 183.346 107.583 183.371 107.05C183.396 106.504 183.483 106.211 183.598 106.055C183.682 105.942 183.832 105.833 184.24 105.833C184.933 105.833 185.725 106.477 186.373 107.907C187 109.291 187.401 111.239 187.401 113.417Z" />
                                        <path id="Ellipse 10" d="M141.025 113.417C141.025 114.499 141.072 115.532 141.114 116.465C141.116 116.506 141.118 116.546 141.12 116.586C141.163 117.558 141.199 118.407 141.174 119.115C141.148 119.835 141.06 120.332 140.904 120.637C140.831 120.779 140.752 120.862 140.672 120.912C140.594 120.962 140.481 121 140.305 121C139.612 121 138.819 120.356 138.172 118.926C137.545 117.542 137.144 115.594 137.144 113.417C137.144 111.239 137.545 109.291 138.172 107.907C138.819 106.477 139.612 105.833 140.305 105.833C140.481 105.833 140.594 105.872 140.672 105.921C140.752 105.971 140.831 106.054 140.904 106.196C141.06 106.501 141.148 106.998 141.174 107.719C141.199 108.426 141.163 109.276 141.12 110.248C141.118 110.288 141.116 110.328 141.114 110.368C141.072 111.301 141.025 112.334 141.025 113.417Z" />
                                        <ellipse id="Ellipse 11" cx="161.052" cy="78.3889" rx="4.88164" ry="5.38889" />
                                        <path id="Vector 14" d="M161.052 79.7361V98.5972" />
                                        <ellipse id="Ellipse 12" cx="153.73" cy="108.028" rx="4.88164" ry="5.38889" />
                                        <ellipse id="Ellipse 13" cx="170.815" cy="108.028" rx="4.88164" ry="5.38889" />
                                        <path id="Vector 15" d="M151.289 121.5H173.256" />
                                        <path id="Rectangle 2" d="M142.025 130.083H182.519V169.5H142.025V130.083Z" />
                                        <path id="Vector 16" d="M141.865 129.862L132.974 142.885M127.918 150.07C127.918 150.07 121.176 145.096 132.974 142.885M132.974 142.885L136.344 150.07" />
                                        <path id="Vector 17" d="M182.355 129.862L190.026 141.538M195.082 148.723C195.082 148.723 201.824 143.749 190.026 141.538M190.026 141.538L186.656 148.723" />
                                    </g>
                                    <path id="Vector 18" d="M85.5 86.5V61" />
                                </g>
                            </svg>

                            <h3 className="projects__title">SCIROC</h3>
                        </div>

                        <span className="button button--flex button--small button--link projects__button" onClick={() => this.loadModal("projects__modal-2", true)}>
                            View More
                            <i className="uil uil-arrow-right button__icon projects__button-arrow"></i>
                        </span>

                        <div className="projects__modal" id="projects__modal-2">
                            <div className="projects__modal-content">
                                <h4 className="projects__modal-title">SCIROC</h4>
                                <p className="projects__modal-date">2019 - Current</p>
                                <a href="https://sciroc.org/" target="_blank" rel="noreferrer">
                                    <i className="uil uil-info-circle projects__modal-link"></i>
                                </a>
                                <i className="uil uil-times projects__modal-close" onClick={() => this.loadModal("projects__modal-2", false)}></i>

                                <div className="projects__modal-projects grid">
                                    {/* OBJECTIVE */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-objective">
                                        <i className="uil uil-crosshair projects__modal-project-objective-icon"></i>
                                            Objective
                                        </p>
                                        <p className="projects__modal-project-objective-text">
                                            SciRoc is a funded project supporting the European Robotics League (ERL).
                                            The ERL is a framework for robotics competitions whose goal is to show how robots will integrate as physical agents in the cities of tomorrow. It currently consists of three challenges, ERL Consumer, ERL Professional and ERL Emergency, taking place every two years in one major tournament, ERL Smart Cities.
                                            {/* During these challenges, the robots must cooperate with a simulated smart city and interact with its citizens. Assisting customers, providing services are examples of tasks robots are excepted to execute. */}
                                        </p>
                                        {/* <p className="projects__modal-project-objective-font">Durable Website</p> */}
                                    </div>
                                    {/* POSITION */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-position">
                                        <i className="uil uil-hard-hat projects__modal-project-position-icon"></i>
                                            Position
                                        </p>
                                        <p className="projects__modal-project-position-text">Research Fellow</p>
                                    </div>
                                    {/* PARTNERS */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-partners">
                                        <i className="uil uil-users-alt projects__modal-project-partners-icon"></i>
                                            Partners
                                        </p>
                                        <ul className="projects__modal-project-partners-list">
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Universidade de Lisboa Insituto Superior T??cnico, Portugal
                                                </p>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- PROJECT 3 --> */}
                    <div className="projects__content">
                        <div>
                            {/* <i className="uil uil-web-grid projects__icon"></i> */}
                            {/* https://icons8.com/icons/set/robot */}
                            {/* <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55"viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M133.38,6.94688c-0.89508,0.10688 -1.69664,0.57445 -2.24437,1.2825l-10.04625,12.61125c-1.95047,-2.44477 -4.90289,-4.06125 -8.22938,-4.06125h-13.68c-4.48875,0 -8.32289,2.93906 -9.8325,6.94688h-33.13125c-5.5575,-8.1225 -14.8957,-13.46625 -25.43625,-13.46625c-16.95305,0 -30.78,13.82695 -30.78,30.78c0,10.54055 5.34375,19.87875 13.46625,25.43625c0.04008,0.02672 0.0668,0.08016 0.10687,0.10688c0,0.04008 0,0.0668 0,0.10688l36.87188,69.89625h-26.9325c-5.63765,0 -10.04625,4.86281 -10.04625,10.47375v20.52c-0.01336,0.96188 0.37406,1.89703 1.05539,2.57836c0.68133,0.68133 1.61648,1.06875 2.57836,1.05539h116.28c0.96187,0.01336 1.89703,-0.37406 2.57836,-1.05539c0.68133,-0.68133 1.06875,-1.61648 1.05539,-2.57836v-20.52c0,-5.61094 -4.40859,-10.47375 -10.04625,-10.47375h-24.68812l-44.24625,-78.2325h31.31438c1.50961,4.00781 5.34375,6.94687 9.8325,6.94687h13.68c3.32648,0 6.27891,-1.61648 8.22938,-4.06125l10.04625,12.61125c1.00195,1.25578 2.75203,1.61648 4.16813,0.855l33.87937,-18.48937c1.4161,-0.76148 2.0707,-2.41805 1.57641,-3.94102c-0.50766,-1.53633 -2.01727,-2.47148 -3.60703,-2.25773c-0.41414,0.0668 -0.81492,0.21375 -1.17562,0.4275l-31.31438,17.20688l-11.22187,-14.21438v-24.68812l11.22187,-14.21437l31.31438,17.1c1.04203,0.70805 2.39133,0.76148 3.4868,0.14695c1.09547,-0.61453 1.75008,-1.79016 1.68328,-3.04594c-0.05344,-1.25578 -0.81492,-2.36461 -1.96383,-2.87227l-33.87937,-18.48937c-0.58781,-0.33398 -1.25578,-0.48094 -1.92375,-0.4275zM30.78,17.1c8.4832,0 15.9511,4.38187 20.19937,11.00813c0.04008,0.0668 0.0668,0.14695 0.10688,0.21375c0.0668,0.14695 0.1336,0.29391 0.21375,0.4275c0.08016,0.22711 0.18703,0.44086 0.32062,0.64125c0.05344,0.09352 0.16031,0.12023 0.21375,0.21375c0.0668,0.10687 0.1336,0.21375 0.21375,0.32062c1.72336,3.31312 2.67188,7.10719 2.67188,11.115c0,3.96773 -0.97523,7.72172 -2.67187,11.00813c-0.02672,0.04008 -0.08015,0.0668 -0.10688,0.10688c-0.04008,0.0668 -0.08015,0.14695 -0.10687,0.21375c-0.01336,0.02672 0.01336,0.08016 0,0.10688c-0.08015,0.0668 -0.14695,0.1336 -0.21375,0.21375c-0.22711,0.29391 -0.40078,0.61453 -0.53437,0.96187c-0.04008,0.10688 -0.08015,0.21375 -0.10688,0.32062c-4.24828,6.62625 -11.71617,11.00813 -20.19937,11.00813c-13.2525,0 -23.94,-10.6875 -23.94,-23.94c0,-13.2525 10.6875,-23.94 23.94,-23.94zM30.78,21.69563c-0.22711,0 -0.41414,0.09352 -0.64125,0.10687c-0.21375,0.05344 -0.44086,0.12023 -0.64125,0.21375c-9.97945,0.70805 -18.06187,8.87063 -18.06187,19.02375c0,10.60735 8.73703,19.34438 19.34438,19.34438c10.60735,0 19.34438,-8.73703 19.34438,-19.34437c0,-10.11305 -8.02898,-18.26227 -17.955,-19.02375c-0.04008,0 -0.0668,-0.10687 -0.10688,-0.10687c-0.24047,-0.0668 -0.4943,-0.09352 -0.74813,-0.10688c-0.18703,0 -0.34734,-0.10687 -0.53437,-0.10687zM99.18,24.26063h13.68c1.75008,0 3.09937,1.3493 3.09937,3.09937v27.36c0,1.75008 -1.3493,3.09938 -3.09937,3.09938h-13.68c-1.75008,0 -3.09937,-1.3493 -3.09937,-3.09938v-27.36c0,-1.75008 1.3493,-3.09937 3.09937,-3.09937zM30.56625,28.53563c0.0668,0 0.14695,0 0.21375,0c6.89344,0 12.50437,5.61094 12.50437,12.50438c0,6.89344 -5.61094,12.50438 -12.50437,12.50438c-6.89344,0 -12.50438,-5.61094 -12.50438,-12.50438c0,-6.82664 5.4907,-12.38414 12.29063,-12.50437zM59.85,30.99375h28.74937v20.0925h-28.74937c1.09547,-3.16617 1.71,-6.51938 1.71,-10.04625c0,-3.52687 -0.61453,-6.88008 -1.71,-10.04625zM52.5825,62.62875l41.78813,73.9575h-36.3375l-34.6275,-65.72813c2.37797,0.58781 4.82273,0.96187 7.37438,0.96187c8.53664,0 16.21828,-3.55359 21.8025,-9.19125zM23.5125,143.85375h31.52813c0.855,0.3607 1.81688,0.3607 2.67188,0h69.255c1.48289,0 2.77875,1.2825 2.77875,3.20625v16.88625h-109.0125v-16.88625c0,-1.92375 1.29586,-3.20625 2.77875,-3.20625z"></path>
                                    </g>
                                </g>
                            </svg> */}
                            
                            {/* mbzirc3.svg  */}
                            <svg className="projects__icon3" width="85" height="85" viewBox="0 0 200 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="mbzirc2">
                                    <g id="robot">
                                        <path id="Vector 19" d="M134.431 158.525H128.451V136.25L144.396 113.975H192.232V158.525H186.253M167.65 158.525H152.369" />
                                        <rect id="Rectangle 3" x="121.143" y="148.4" width="7.9726" height="8.1" />
                                        <rect id="Rectangle 4" x="191.568" y="149.75" width="5.31507" height="5.4" />
                                        <path id="Ellipse 15" d="M187.581 159.2C187.581 165.165 182.822 170 176.951 170C171.08 170 166.321 165.165 166.321 159.2C166.321 153.235 171.08 148.4 176.951 148.4C182.822 148.4 187.581 153.235 187.581 159.2ZM169.795 159.2C169.795 163.216 172.999 166.471 176.951 166.471C180.904 166.471 184.108 163.216 184.108 159.2C184.108 155.184 180.904 151.929 176.951 151.929C172.999 151.929 169.795 155.184 169.795 159.2Z" />
                                        <path id="Ellipse 17" d="M154.362 159.2C154.362 165.165 149.603 170 143.732 170C137.861 170 133.102 165.165 133.102 159.2C133.102 153.235 137.861 148.4 143.732 148.4C149.603 148.4 154.362 153.235 154.362 159.2ZM136.575 159.2C136.575 163.216 139.78 166.471 143.732 166.471C147.684 166.471 150.889 163.216 150.889 159.2C150.889 155.184 147.684 151.929 143.732 151.929C139.78 151.929 136.575 155.184 136.575 159.2Z" />
                                        <ellipse id="Ellipse 18" cx="143.732" cy="159.2" rx="3.9863" ry="4.05" />
                                        <ellipse id="Ellipse 19" cx="176.951" cy="159.2" rx="3.9863" ry="4.05" />
                                        <path id="Ellipse 16" d="M187.581 159.2C187.581 165.165 182.822 170 176.951 170C171.08 170 166.321 165.165 166.321 159.2C166.321 153.235 171.08 148.4 176.951 148.4C182.822 148.4 187.581 153.235 187.581 159.2ZM169.795 159.2C169.795 163.216 172.999 166.471 176.951 166.471C180.904 166.471 184.108 163.216 184.108 159.2C184.108 155.184 180.904 151.929 176.951 151.929C172.999 151.929 169.795 155.184 169.795 159.2Z" />
                                        <rect id="Rectangle 5" x="166.321" y="136.25" width="21.2603" height="2.7" />
                                        <rect id="Rectangle 6" x="145.061" y="109.25" width="46.5068" height="2.7" />
                                        <ellipse id="Ellipse 20" cx="168.314" cy="103.175" rx="5.97945" ry="6.075" />
                                        <ellipse id="Ellipse 21" cx="152.369" cy="68.075" rx="5.97945" ry="6.075" />
                                        <ellipse id="Ellipse 22" cx="108.52" cy="80.225" rx="5.97945" ry="6.075" />
                                        <rect id="Rectangle 7" width="3.99712" height="25.1757" transform="matrix(0.909279 -0.416188 0.405362 0.914156 154.27 74.5528)" />
                                        <path id="Rectangle 11" d="M145.751 67.9882L146.779 71.9012L115.15 80.4787L114.654 78.8226L114.152 76.8231L145.751 67.9882Z" />
                                        <rect id="Rectangle 9" width="4.04579" height="3.95808" transform="matrix(0.374473 0.927238 -0.92425 0.381787 102.008 80.9908)" />
                                        <path id="Ellipse 23" d="M84.9421 78.2878C86.3244 77.7644 87.7992 77.5399 89.2721 77.6288C90.745 77.7176 92.1837 78.1178 93.4963 78.8037C94.8089 79.4896 95.9667 80.4462 96.8956 81.6125C97.8244 82.7787 98.5041 84.1289 98.891 85.5769C99.278 87.0249 99.3638 88.5388 99.1429 90.0219C98.9221 91.5051 98.3994 92.9249 97.6084 94.1907C96.8173 95.4565 95.7752 96.5404 94.5486 97.3734C93.3221 98.2063 91.938 98.7698 90.4847 99.028L89.9211 95.7607C90.9276 95.5819 91.8862 95.1915 92.7357 94.6147C93.5852 94.0378 94.3069 93.2871 94.8548 92.4104C95.4027 91.5337 95.7647 90.5504 95.9176 89.5232C96.0706 88.4959 96.0112 87.4474 95.7432 86.4446C95.4752 85.4417 95.0045 84.5066 94.3611 83.6989C93.7178 82.8911 92.916 82.2286 92.0068 81.7535C91.0977 81.2784 90.1013 81.0013 89.0812 80.9398C88.061 80.8782 87.0397 81.0337 86.0823 81.3962L84.9421 78.2878Z" />
                                    </g>
                                    <g id="wall">
                                        <rect id="Rectangle 13" x="4" y="149.4" width="31.8904" height="21.6" />
                                        <rect id="Rectangle 15" x="75.7534" y="149.4" width="31.8904" height="21.6" />
                                        <rect id="Rectangle 16" x="22.6027" y="123.75" width="31.8904" height="21.6" />
                                        <rect id="Rectangle 18" x="41.2055" y="98.1" width="31.8904" height="21.6" />
                                        <rect id="Rectangle 17" x="58.4795" y="123.75" width="31.8904" height="21.6" />
                                        <rect id="Rectangle 14" x="39.8767" y="149.4" width="31.8904" height="21.6" />
                                    </g>
                                </g>
                            </svg>
                            <h3 className="projects__title">MBZIRC</h3>
                        </div>

                        <span className="button button--flex button--small button--link projects__button" onClick={() => this.loadModal("projects__modal-3", true)}>
                            View More
                            <i className="uil uil-arrow-right button__icon projects__button-arrow"></i>
                        </span>

                        <div className="projects__modal" id="projects__modal-3">
                            <div className="projects__modal-content">
                                <h4 className="projects__modal-title">MBZIRC</h4>
                                <p className="projects__modal-date">2020 - 2020</p>
                                <a href="https://www.mbzirc.com/challenge/2020" target="_blank" rel="noreferrer">
                                    <i className="uil uil-info-circle projects__modal-link"></i>
                                </a>
                                <i className="uil uil-times projects__modal-close" onClick={() => this.loadModal("projects__modal-3", false)}></i>

                                <div className="projects__modal-projects grid">
                                    {/* OBJECTIVE */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-objective">
                                        <i className="uil uil-crosshair projects__modal-project-objective-icon"></i>
                                            Objective
                                        </p>
                                        <p className="projects__modal-project-objective-text">
                                            The Mohamed Bin Zayed International Robotics Challenge (MBZIRC) is a biennial international robotics competition whose aim is to inspire robotics through technological excellence and innovative solutions.
                                        </p>
                                        {/* <p className="projects__modal-project-objective-font">Durable Website</p> */}
                                    </div>
                                    {/* POSITION */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-position">
                                        <i className="uil uil-hard-hat projects__modal-project-position-icon"></i>
                                            Position
                                        </p>
                                        <p className="projects__modal-project-position-text">Research Fellow</p>
                                    </div>
                                    {/* PARTNERS */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-partners">
                                        <i className="uil uil-users-alt projects__modal-project-partners-icon"></i>
                                            Partners
                                        </p>
                                        <ul className="projects__modal-project-partners-list">
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Khalifa University of Science and Technology, United Arab
                                                </p>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                     {/* <!-- PROJECT 4 --> */}
                     <div className="projects__content">
                        <div>
                            {/* <svg className="projects__icon3" id="SocRobLogo" width="55" height="55" x="0px" y="0px" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path id="Vector 3" d="M19.9626 41.785L40.0093 60.4019V111.598L19.9626 131.766H3L9.16822 151.935H19.9626V162.794L40.0093 169V152.71L59.285 133.318H110.944L130.991 151.935V169L151.037 162.794V151.935H161.061L168 130.991L151.037 131.766L130.991 111.598V60.4019L151.037 40.2336H168L161.061 20.0654H151.037V10.757L130.991 3.7757V20.0654L110.944 40.2336H59.285L40.0093 20.0654V3L19.9626 10.757V21.6168H9.16822L3 41.785H19.9626Z"/>
                                    <path id="Vector 4" d="M84 47L47 75.125H57.7917V122H110.208V75.125H121L108.667 65.75V50.125H97.875V57.1562L84 47Z"/>
                                </g>
                            </svg> */}
                            {/* SocRob4.svg */}
                            <svg className="projects__icon3" width="85" height="85" viewBox="0 0 200 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SocRob">
                                    <g id="logo">
                                        <path id="Vector 24" d="M45.8196 136.655V119.397H38.4655L58.265 103.866L66.1848 110.194V106.167H70.7104V114.796L76.9331 119.397H69.0133V136.655H45.8196Z"/>
                                        <path id="Vector 25" d="M90.5099 136.655H106.915C107.82 136.655 101.258 147.776 97.864 153.337H90.5099V161.39C90.5099 162.311 79.9502 167.143 74.6703 169.444V153.337L66.1848 145.859H49.2138L41.2941 153.337V169.444C41.2941 171.745 29.9801 164.266 24.3231 160.24V153.337H18.1004C15.8376 153.337 11.1234 142.215 9.0492 136.655H24.3231L32.8086 128.601V112.495L24.3231 104.441H9.0492C6.7864 104.441 14.1405 93.7033 18.1004 88.3343H24.3231V82.0067C24.3231 80.1659 35.6371 75.1037 41.2941 72.8028V88.3343L49.2138 95.8125H66.1848L74.6703 88.3343V72.8028C74.6703 69.5814 85.23 76.8295 90.5099 80.8562V88.3343H97.864C100.579 88.3343 105.03 99.0722 106.915 104.441H90.5099L82.5901 112.495V128.601L90.5099 136.655Z"/>
                                    </g>
                                </g>
                            </svg>

                            <h3 className="projects__title">SOCROB</h3>
                        </div>

                        <span className="button button--flex button--small button--link projects__button" onClick={() => this.loadModal("projects__modal-4", true)}>
                            View More
                            <i className="uil uil-arrow-right button__icon projects__button-arrow"></i>
                        </span>

                        <div className="projects__modal" id="projects__modal-4">
                            <div className="projects__modal-content">
                                <h4 className="projects__modal-title">SOCROB@HOME</h4>
                                <p className="projects__modal-date">2019 - Current</p>
                                <a href="https://irsgroup.isr.tecnico.ulisboa.pt/projects/socrob-home/" target="_blank" rel="noreferrer">
                                    <i className="uil uil-info-circle projects__modal-link"></i>
                                </a>
                                <i className="uil uil-times projects__modal-close" onClick={() => this.loadModal("projects__modal-4", false)}></i>

                                <div className="projects__modal-projects grid">
                                    {/* OBJECTIVE */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-objective">
                                        <i className="uil uil-crosshair projects__modal-project-objective-icon"></i>
                                            Objective
                                        </p>
                                        <p className="projects__modal-project-objective-text">
                                            SocRob@Home is an active team of SocRob, a long-term project at the Institute for Systems and Robotics (ISR).
                                        </p>
                                        {/* <p className="projects__modal-project-objective-font">Durable Website</p> */}
                                    </div>
                                    {/* POSITION */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-position">
                                        <i className="uil uil-hard-hat projects__modal-project-position-icon"></i>
                                            Position
                                        </p>
                                        <p className="projects__modal-project-position-text">Team Leader</p>
                                    </div>
                                    {/* PARTNERS */}
                                    <div className="projects__modal-project">
                                        <p className="projects__modal-project-partners">
                                        <i className="uil uil-users-alt projects__modal-project-partners-icon"></i>
                                            Partners
                                        </p>
                                        <ul className="projects__modal-project-partners-list">
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Universidade de Lisboa Insituto Superior T??cnico, Portugal
                                                </p>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects
