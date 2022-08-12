import React from 'react';

const Weadingloaction = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Nuestra Boda y La Recepcion</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">MISA Y CEREMONIA RELIGIOSA</h4>
														<p>1:00 pm</p>
                            <p>Sabado, 24 de Septiembre de 2022.</p>
														<p>Templo Cala Cala, Plza. L. F.Guzman entre C. Atahuallpa y C. K. Yupanqui, Kupaj Yupanqui</p>
                            <p>
							<div className="map-responsive">
														<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.9118217919686!2d-66.16602278470201!3d-17.367975568245352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3743f9616da71%3A0x1533a314ede96e1c!2sIglesia%20Santa%20Ana%20de%20Cala%20Cala!5e0!3m2!1sen!2sbo!4v1656718851564!5m2!1sen!2sbo" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
							</p>

						</div>  
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h4 className="title">RECEPCION</h4>
							<p>3:30 pm</p>
							<p>Sabado, 24 de Septiembre de 2022.</p>
							<p>Salon de Eventos la Terraza. Tiquipaya, Calle del Caracol #999</p>
                            <p>
							<div className="map-responsive">
														<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15234.383191370513!2d-66.202782!3d-17.3350408!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6e6d4b6e009f74c!2sLa%20Terraza!5e0!3m2!1sen!2sbo!4v1656719837089!5m2!1sen!2sbo" width="600" height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
								</p>
						</div> 
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">MATRIMONIO CIVIL</h4>
														<p>4:00 pm</p>
                            <p>Sabado, 24 de Septiembre de 2022.</p>
                            <p>
							</p>

						</div>

						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">CENA DE BODAS</h4>
							<p>7:00 pm</p>
              <p>Sabado, 24 de Septiembre de 2022.</p>
						</div> 

						{/* <div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">RECEPCION EN NUESTRO HOGAR</h4>
							<p>4:00 pm</p>
							<p>Domingo, 25 de Septiembre de 2022.</p>
							<p>
							</p>
                         </div> */}
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;