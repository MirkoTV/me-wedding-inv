import React from 'react';
import '../OurStory.css';
import img3 from '../images/met5.jpg'
import img2 from '../images/met3.jpg'
import img1 from '../images/met4.jpg'
const WeadingDetails = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="heading">
                            <span>Un poco de...</span>
                            <h2 className="title">Nuestra Historia</h2>
                            <p>To love a person is to see all of their magic, and to remind them of it when they have forgotten.</p>
                            <p>Ah, life grows lovely where you are.</p>
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
                                        <span className="date">Enero 2018</span>
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
                                        <span className="date"><i className="icon icon-date"></i>18 de Septiembre de 2018</span>
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
                                        <span className="date">19 de Septiembre de 2018</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Despues de tomar un cafe, decidimos que queriamos estar juntos.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img2})`}}></div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h3 className="timeline-title">Nuestro Compromiso</h3>
                                        <span className="date"><i className="icon icon-date"></i>18 de Octubre de 2021</span>
                                    </div>
                                    <div className="timeline-body">
                                        <p>Me dijo que si!</p>
                                    </div>
                                </div>
                            </li>
                            <li className="animate-box fadeInUp animated-fast">
                                <div className="timeline-badge" style={{backgroundImage: `url(${img3})`}}></div>
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
                    <div className="col-md-12 col-md-offset-0">
                        Y vamos por mas...
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeadingDetails;