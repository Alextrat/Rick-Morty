import React, { useContext } from 'react';
import styles from './LocationsComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const LocationsComponent = () => {
  const {locations} = useContext(RMcontext)
console.log(locations)
  
  return(
    <div className={styles.lc_container}>
    <br></br>
    <br></br>
    <br></br>
    
    <SimpleBar style={{ maxHeight:500}}>
    <div className={styles.prueba}>
    {locations.length?(
      <>
        {locations.map((location)=>(
          <>
        <div className={styles.prueba2}>
        <h1 key={location.id}>{location.name}</h1>
        <h3>{location.type}</h3>  
        <h3>{location.dimension}</h3>  
        </div>   
        </>
        ))} 
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
</SimpleBar>

    </div>
  )};

LocationsComponent.propTypes = {};

LocationsComponent.defaultProps = {};

export default LocationsComponent;
