import React from 'react';
import { useState, useEffect } from "react" 
import { useDispatch, useSelector } from 'react-redux'
import { createPokemon, getTypes } from '../../actions';
import './CreatePokemon.css'
import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";

const validate = (input) => {
  const errors = {}
  if (!input.name) {
    errors.name = '¡Debes colocarle un nombre al pokemon!'
  } else if (/[^a-zA-Z, ]/g.test(input.name)) {
    errors.name = '¡El nombre solo puede ser compuesto por letras!'
  }
  if(input.weight < 0 || input.height< 0 || input.attack< 0 || input.speed< 0 || input.hp< 0 || input.defense< 0) {
    errors.stats = '¡Las estadisticas no pueden ser ni negativas ni cero!'
  }
  if(!input.weight || !input.height || !input.attack|| !input.speed|| !input.hp || !input.defense) {
    errors.stats = '¡Coloca todas las estadisticas!'
  }
  if(!input.type[0]) {
    errors.type = '¡Debes seleccionar al menos un tipo!'
  }

  return errors
}

const CreatePokemon = () => {
    const Types = useSelector(state => state.types)
    var reader = new FileReader()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
      name: "",
      weight: "",
      height: "",
      attack: "",
      speed: "",
      defense: "",
      image: '',
      hp: "",
      type: []
    });


    const loadFile = function(e) {
      const image = document.getElementById('output');
      const file = e.target.files[0]
      reader.addEventListener("load", () => {
        // convert image file to base64 string
        image.src = reader.result;
        setInput({
          ...input,
          [e.target.name]: reader.result
      })
      }, false);
      if (file) {
        reader.readAsDataURL(file);
      }    
      setInput({
        ...input,
        [e.target.name]: reader.result
    })
  }

    useEffect(() => {
      dispatch(getTypes())
    }, [])

    let handleChange = (e) => {
      e.preventDefault();
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }))
    }

    

    let handleSubmit = (e) => {
      e.preventDefault();
      dispatch(createPokemon(input))
      navigate(`/home`)

    }

    const handleType = (e) => {
      if(e.target.checked){
        setInput({
          ...input,
          type: [...input.type, e.target.value]
        })
        setErrors(validate({
          ...input,
          type: [...input.type, e.target.value]
        }))
      }
        if(e.target.checked === false){
          setInput({
            ...input,
            type: [...input.type.filter(item => item !== e.target.value)]
          })
          setErrors(validate({
            ...input,
            type: [...input.type.filter(item => item !== e.target.value)]
          }))
      }

    }

  return (
    <>
    <div id="background2">
    <div/>
    <Nav/>
    <div>
    <form id = "form" onSubmit={handleSubmit}>    

    <div className="stats">
        <label htmlFor="name">Nombre del pokemon: </label>
        <input
          value={input.name}
          className={errors.name && 'danger'}
          type="text"
          name="name"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="weight">Peso: </label>
        <input
          value={input.weight}
          className={errors.stats && 'danger'}
          type="number" 
          name="weight"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="height">Altura: </label>
        <input
          value={input.height}
          className={errors.stats && 'danger'}
          type="number"
          name="height"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="hp">Vida: </label>
        <input
          value={input.hp}
          className={errors.stats && 'danger'}
          type="number"
          name="hp"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="attack">Ataque: </label>
        <input
          value={input.attack}
          className={errors.stats && 'danger'}
          type="number"
          name="attack"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="defense">Defensa: </label>
        <input
          value={input.defense}
          className={errors.stats && 'danger'}
          type="number"
          name="defense"
          onChange={handleChange}
        />  
    </div>
    <div className="stats">
        <label htmlFor="speed">Velocidad: </label>
        <input
          value={input.speed}
          className={errors.stats && 'danger'}
          type="number"
          name="speed"
          onChange={handleChange}
        />  
    </div>

    <div >
    <input type="file"  accept="image/*" name="image" id="file"  onChange={loadFile}></input>
    <img id="output" width="200" alt="Sin imagen" />
      </div>        
        <div id='types'>
        <label>Tipo/s:</label>
        {
          Types.map(t => {
            return (
              <div class="col-12 text-left" className="types">
              <label className="types" key={t.id}>
              {t.name}
              <input type="checkbox" value={t.name} onChange={(t)=>handleType(t)}/>
              </label>
              </div>
            )
          })
        }
      </div>
      
      <button disabled={errors.name || errors.stats || errors.type} type="submit" className>Crear</button>
      { errors.name && (<p className="danger">{errors.name}</p>) }
      { errors.type && (<p className="danger">{errors.type}</p>) }
      { errors.stats && (<p className="danger">{errors.stats}</p>) }
      </form>
      </div>  
      </div> 
      </>
 
  ); 
};

export default CreatePokemon;
