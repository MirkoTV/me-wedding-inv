import React from 'react';
import '../OurStory.css';
import img5 from '../images/firstTrip.jpg'
import img4 from '../images/engagement.jpg'
import img3 from '../images/firstDate.JPG'
import img2 from '../images/firstParty.JPG'
import img1 from '../images/party.jpeg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>Un poco de...</span>
                            <h2 className="title">Nuestra Historia</h2>
                            <p>Everyday life is like programming, I guess. If you love something you can put beauty into it.</p>
                            <span className="heading-bottom"><i className="icon icon-star"></i></span>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-offset-0">
                        <ul className="timeline animate-box fadeInUp animated-fast">
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img1})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Nos Conocimos</h3>
                                        <span className="date">Enero 2017</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>No tenemos una foto, pero lo recordamos muy bien. Nos conocimos en el trabajo, durante un almuerzo que ninguno tenia planeado</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Primera Fiesta</h3>
                                        <span className="date"><i className="icon icon-date"></i>18 de Febrero de 2017</span>
                                    </div>
                                    <div className="timeline-body" style={{ textAlign: 'left' }}>
                                        <p>Mirko: Y.. Que musica te gusta?</p>
                                        <p>Erika: Ah, la electronica</p>
                                        <p>Mirko: Que coincidencia, yo soy Ing. Electronico, practicamente te gusto...</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">En una relacion</h3>
                                        <span className="date">19 de Febrero de 2017</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Despues de tomar un cafe, decidimos que queriamos estar juntos.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img4})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Nuestro Compromiso</h3>
                                        <span className="date"><i className="icon icon-date"></i>25 de Octubre de 2021</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Me dijo que si!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img5})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Nuestro Primer Viaje</h3>
                                        <span className="date">24 de Diciembre de 2022</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Nos fuimos lejos!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-md-offset-0" style={{ fontSize: "30px" }}>
                        Y vamos por mas...
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;