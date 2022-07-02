import React from 'react';
import sindurdan from '../images/ap.png';
import hand from '../images/w22.png';
import '../WeadingDate.css';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">

                        <img className="sindur-dan" src={sindurdan} alt="Sindur Dan"/>
                        <h5 className="date">24 de Septiembre de 2022</h5>
                        <h3 className="pre-title">Nuestra Boda</h3>
                        <h1 className="title">Mirko  &#x26; Erika</h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;