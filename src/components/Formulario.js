import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ( { busqueda, setBusqueda, setConsultar } ) => {

    //state del form
    
    const [error, setError] = useState(false);

    const { ciudad, pais } = busqueda;

    //funcion que coloca elementos en state
    const handleChange = e => {
        // actualizar state
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //sumbit
    const handleSubmit = e => {
        e.preventDefault();
        
        // validar
        if (ciudad.trim() === "" || pais.trim() === "")
        {
            setError(true);
            return;
        }
        setError(false);

        // pasarlo al componente
        setConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ?  <Error msg="Todos los campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}
export default Formulario;