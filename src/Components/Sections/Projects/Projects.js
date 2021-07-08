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
                            <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M26.14993,32.0625l-1.40378,5.34375h-24.74615v8.01563l29.39063,-2.67187l29.39063,2.67188v-8.01562h-24.74616l-1.40378,-5.34375zM138.36868,32.0625l-1.40378,5.34375h-24.74616v8.01563l29.39063,-2.67187l29.39063,2.67188v-8.01562h-24.74616l-1.40378,-5.34375zM24.04688,48.09375v13.35938v2.67188v8.01563c8.64489,1.85248 15.08926,3.99149 20.31042,6.18393c-3.08333,9.46421 -6.95105,27.37471 -6.95105,57.94107h8.01563c1.93248,-30.91961 9.40611,-44.93291 13.422,-50.39511c5.3721,3.17347 10.06762,5.79586 17.44024,6.97192l0.26615,1.33594c0.54239,2.71997 2.93042,4.681 5.70383,4.681h3.24591h3.24591c2.77341,0 5.16143,-1.96103 5.70383,-4.681l0.26615,-1.33594c7.37262,-1.17606 12.06814,-3.79846 17.44024,-6.97192c4.01589,5.4622 11.48952,19.4755 13.422,50.39511h8.01563c0,-30.56636 -3.86772,-48.47686 -6.95105,-57.94107c5.22117,-2.19244 11.66553,-4.33145 20.31042,-6.18393v-10.6875v-13.35937h-10.6875v13.35938h-50.76562h-50.76562v-13.35937z"></path>
                                    </g>
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
                                                    Ingeteam Corporación SA, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Centro de Investigacion en Tecnologias de Union Lortek, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    Corporación Tecnológia de Andalucía, Spain
                                                </p>
                                            </li>
                                            <li className="projects__modal-project-partners-list-element">
                                                <p className="projects__modal-project-partners-list-element-text">
                                                    École supérieure des technologies industrielles avancées, France
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
                            <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M85.37977,6.84c-0.72387,0.0258 -1.42087,0.28074 -1.99055,0.72809l-78.66,61.56c-0.96208,0.75399 -1.44874,1.96404 -1.2766,3.1742c0.17214,1.21016 0.97692,2.2365 2.11109,2.69231c1.13417,0.45581 2.42537,0.2718 3.38707,-0.48268l4.72922,-3.70055v89.92863c0.00019,1.88874 1.53126,3.41981 3.42,3.42h136.8c1.88874,-0.00019 3.41981,-1.53126 3.42,-3.42v-89.92863l4.72922,3.70055c0.9617,0.75443 2.25287,0.9384 3.38701,0.48259c1.13414,-0.45581 1.9389,-1.48213 2.11105,-2.69225c0.17215,-1.21013 -0.31446,-2.42015 -1.2765,-3.17416l-78.66,-61.56c-0.63453,-0.49821 -1.42475,-0.7561 -2.23102,-0.72809zM85.5,14.6018l64.98,50.85246v91.86574h-129.96v-91.86574zM85.5,68.4c-18.49878,0 -35.28045,7.41445 -47.60613,19.38445l4.8361,4.82941c11.08764,-10.73196 26.1591,-17.37387 42.77004,-17.37387c16.61094,0 31.6824,6.64191 42.77004,17.37387l4.8361,-4.82941c-12.32568,-11.97 -29.10735,-19.38445 -47.60613,-19.38445zM85.5,85.5c-13.78602,0 -26.28874,5.49311 -35.5159,14.36801l4.8361,4.83609c7.9857,-7.64028 18.78162,-12.3641 30.6798,-12.3641c11.89818,0 22.6941,4.72382 30.6798,12.3641l4.8361,-4.83609c-9.22716,-8.8749 -21.72988,-14.36801 -35.5159,-14.36801zM85.5,102.6c-9.06984,0 -17.30371,3.57176 -23.43234,9.35156l4.83609,4.8361c4.8906,-4.54176 11.41425,-7.34766 18.59625,-7.34766c7.182,0 13.70907,2.80247 18.59625,7.34766l4.82941,-4.82942c-6.12522,-5.78322 -14.35582,-9.35824 -23.42566,-9.35824zM85.5,119.7c-3.77763,0 -6.84,3.06237 -6.84,6.84c0,3.77763 3.06237,6.84 6.84,6.84c3.77763,0 6.84,-3.06237 6.84,-6.84c0,-3.77763 -3.06237,-6.84 -6.84,-6.84z"></path>
                                    </g>
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
                                                    Universidade de Lisboa Insituto Superior Técnico, Portugal
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
                            <svg className="projects__icon2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45"viewBox="0 0 171 171">
                                <g>
                                    <path d="M0,171.99219v-171.99219h171.99219v171.99219z" fill="none"></path>
                                    <g>
                                        <path d="M133.38,6.94688c-0.89508,0.10688 -1.69664,0.57445 -2.24437,1.2825l-10.04625,12.61125c-1.95047,-2.44477 -4.90289,-4.06125 -8.22938,-4.06125h-13.68c-4.48875,0 -8.32289,2.93906 -9.8325,6.94688h-33.13125c-5.5575,-8.1225 -14.8957,-13.46625 -25.43625,-13.46625c-16.95305,0 -30.78,13.82695 -30.78,30.78c0,10.54055 5.34375,19.87875 13.46625,25.43625c0.04008,0.02672 0.0668,0.08016 0.10687,0.10688c0,0.04008 0,0.0668 0,0.10688l36.87188,69.89625h-26.9325c-5.63765,0 -10.04625,4.86281 -10.04625,10.47375v20.52c-0.01336,0.96188 0.37406,1.89703 1.05539,2.57836c0.68133,0.68133 1.61648,1.06875 2.57836,1.05539h116.28c0.96187,0.01336 1.89703,-0.37406 2.57836,-1.05539c0.68133,-0.68133 1.06875,-1.61648 1.05539,-2.57836v-20.52c0,-5.61094 -4.40859,-10.47375 -10.04625,-10.47375h-24.68812l-44.24625,-78.2325h31.31438c1.50961,4.00781 5.34375,6.94687 9.8325,6.94687h13.68c3.32648,0 6.27891,-1.61648 8.22938,-4.06125l10.04625,12.61125c1.00195,1.25578 2.75203,1.61648 4.16813,0.855l33.87937,-18.48937c1.4161,-0.76148 2.0707,-2.41805 1.57641,-3.94102c-0.50766,-1.53633 -2.01727,-2.47148 -3.60703,-2.25773c-0.41414,0.0668 -0.81492,0.21375 -1.17562,0.4275l-31.31438,17.20688l-11.22187,-14.21438v-24.68812l11.22187,-14.21437l31.31438,17.1c1.04203,0.70805 2.39133,0.76148 3.4868,0.14695c1.09547,-0.61453 1.75008,-1.79016 1.68328,-3.04594c-0.05344,-1.25578 -0.81492,-2.36461 -1.96383,-2.87227l-33.87937,-18.48937c-0.58781,-0.33398 -1.25578,-0.48094 -1.92375,-0.4275zM30.78,17.1c8.4832,0 15.9511,4.38187 20.19937,11.00813c0.04008,0.0668 0.0668,0.14695 0.10688,0.21375c0.0668,0.14695 0.1336,0.29391 0.21375,0.4275c0.08016,0.22711 0.18703,0.44086 0.32062,0.64125c0.05344,0.09352 0.16031,0.12023 0.21375,0.21375c0.0668,0.10687 0.1336,0.21375 0.21375,0.32062c1.72336,3.31312 2.67188,7.10719 2.67188,11.115c0,3.96773 -0.97523,7.72172 -2.67187,11.00813c-0.02672,0.04008 -0.08015,0.0668 -0.10688,0.10688c-0.04008,0.0668 -0.08015,0.14695 -0.10687,0.21375c-0.01336,0.02672 0.01336,0.08016 0,0.10688c-0.08015,0.0668 -0.14695,0.1336 -0.21375,0.21375c-0.22711,0.29391 -0.40078,0.61453 -0.53437,0.96187c-0.04008,0.10688 -0.08015,0.21375 -0.10688,0.32062c-4.24828,6.62625 -11.71617,11.00813 -20.19937,11.00813c-13.2525,0 -23.94,-10.6875 -23.94,-23.94c0,-13.2525 10.6875,-23.94 23.94,-23.94zM30.78,21.69563c-0.22711,0 -0.41414,0.09352 -0.64125,0.10687c-0.21375,0.05344 -0.44086,0.12023 -0.64125,0.21375c-9.97945,0.70805 -18.06187,8.87063 -18.06187,19.02375c0,10.60735 8.73703,19.34438 19.34438,19.34438c10.60735,0 19.34438,-8.73703 19.34438,-19.34437c0,-10.11305 -8.02898,-18.26227 -17.955,-19.02375c-0.04008,0 -0.0668,-0.10687 -0.10688,-0.10687c-0.24047,-0.0668 -0.4943,-0.09352 -0.74813,-0.10688c-0.18703,0 -0.34734,-0.10687 -0.53437,-0.10687zM99.18,24.26063h13.68c1.75008,0 3.09937,1.3493 3.09937,3.09937v27.36c0,1.75008 -1.3493,3.09938 -3.09937,3.09938h-13.68c-1.75008,0 -3.09937,-1.3493 -3.09937,-3.09938v-27.36c0,-1.75008 1.3493,-3.09937 3.09937,-3.09937zM30.56625,28.53563c0.0668,0 0.14695,0 0.21375,0c6.89344,0 12.50437,5.61094 12.50437,12.50438c0,6.89344 -5.61094,12.50438 -12.50437,12.50438c-6.89344,0 -12.50438,-5.61094 -12.50438,-12.50438c0,-6.82664 5.4907,-12.38414 12.29063,-12.50437zM59.85,30.99375h28.74937v20.0925h-28.74937c1.09547,-3.16617 1.71,-6.51938 1.71,-10.04625c0,-3.52687 -0.61453,-6.88008 -1.71,-10.04625zM52.5825,62.62875l41.78813,73.9575h-36.3375l-34.6275,-65.72813c2.37797,0.58781 4.82273,0.96187 7.37438,0.96187c8.53664,0 16.21828,-3.55359 21.8025,-9.19125zM23.5125,143.85375h31.52813c0.855,0.3607 1.81688,0.3607 2.67188,0h69.255c1.48289,0 2.77875,1.2825 2.77875,3.20625v16.88625h-109.0125v-16.88625c0,-1.92375 1.29586,-3.20625 2.77875,-3.20625z"></path>
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
                            <svg className="projects__icon3" id="SocRobLogo" width="45" height="45" x="0px" y="0px" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path id="Vector 3" d="M19.9626 41.785L40.0093 60.4019V111.598L19.9626 131.766H3L9.16822 151.935H19.9626V162.794L40.0093 169V152.71L59.285 133.318H110.944L130.991 151.935V169L151.037 162.794V151.935H161.061L168 130.991L151.037 131.766L130.991 111.598V60.4019L151.037 40.2336H168L161.061 20.0654H151.037V10.757L130.991 3.7757V20.0654L110.944 40.2336H59.285L40.0093 20.0654V3L19.9626 10.757V21.6168H9.16822L3 41.785H19.9626Z"/>
                                    <path id="Vector 4" d="M84 47L47 75.125H57.7917V122H110.208V75.125H121L108.667 65.75V50.125H97.875V57.1562L84 47Z"/>
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
                                                    Universidade de Lisboa Insituto Superior Técnico, Portugal
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
