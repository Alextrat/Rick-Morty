import React, { useContext } from 'react';
import styles from './EpisodesComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const EpisodesComponent = () => {
  const {episodes} = useContext(RMcontext)

  return(
    <div className={styles.lc_container}>

    <SimpleBar style={{ maxHeight:700}}>
    <div className={styles.lc_container_simplebar}>
    {episodes.length?(
      <>
        {episodes.map((episode)=>(
          <>
        <div className={styles.lc_container_simplebar_card}>
        <h1 key={episode.id}>{episode.name}</h1>
        <h3>{episode.air_date}</h3>
        <h3>{episode.episode}</h3>
        </div>
        </>
        ))}
    </>
    )   :   (<p>Cargando...</p>)}
    </div>
</SimpleBar>

    </div>
  )};


export default EpisodesComponent;
