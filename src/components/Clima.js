import React from 'react';
import PropTypes from 'prop-types';

const Clima = ( { resultado } ) => {

    //extraer
    const {name, main} = resultado;
    const kelvin = 273.15;
    if (!name || !main)
        return null;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima es</h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura máxima: { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>
                    Temperatura mínima { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;