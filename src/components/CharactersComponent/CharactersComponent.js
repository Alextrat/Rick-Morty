import React, { useContext, useState } from 'react';
import styles from './CharactersComponent.module.css';
import { RMcontext } from '../../context/context';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const CharactersComponent = () => {
  const {characters} = useContext(RMcontext)
  const [charactersPrint, setCharactersPrint] = useState(characters)
  const [valorInput, setValorInput]= useState([])

 
 function handleChange(e){    
    setValorInput(e.target.value)
    filtrar(e.target.value)
}
function filtrar (busqueda){
      
    let filtrados = charactersPrint.filter((character)=>
        
      character.name.toLowerCase().includes(busqueda.toLowerCase())
    )
  setCharactersPrint(filtrados)
}
function reset (){
    setCharactersPrint(characters)
    setValorInput("")
}
  return(
    <div className={styles.cc_container}> 

    <SimpleBar style={{ maxHeight:700}}>
    <div className={styles.cc_container_form}>
    <button onClick={reset}>Restablecer</button>
    <input value={valorInput} onChange={handleChange} type="text"></input>
    </div>
    <div className={styles.cc_container_simplebar}>
   {characters.length?(
            <>
            {charactersPrint.map((character)=>(
                <>   
        <div className={styles.cc_container_simplebar_galery}>  
        <h3 key={character.id}>{character.name}</h3>
        <img src={character.image} alt={character.name}/>  
         </div>  
        </>
    ))} 
    </>
    )   :   (   <p>Cargando...</p>  )}
</div>
</SimpleBar>
    </div>
)};


export default CharactersComponent;
