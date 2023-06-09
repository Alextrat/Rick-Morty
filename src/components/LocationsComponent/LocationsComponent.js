import React, { useContext } from 'react';
import styles from './LocationsComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const LocationsComponent = () => {
  const {locations} = useContext(RMcontext)
  
  return(
    <div className={styles.lc_container}>
    
    <SimpleBar style={{ maxHeight:700}}>
    <div className={styles.lc_container_simplebar}>
    {locations.length?(
      <>
        {locations.map((location)=>(
          <>
        <div className={styles.lc_container_simplebar_card}>
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
