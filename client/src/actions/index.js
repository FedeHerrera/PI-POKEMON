export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON = "GET_POKEMON";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMONS = "GET_POKEMONS";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const CLEAR_DETAILS = "CLEAR_DETAILS";
export const ORDER = "ORDER";
export const FILTER_TYPES = "FILTER_TYPES";
export const FILTER_MADE_BY = "FILTER_MADE_BY";
export const ORDER_ATTACK = "ORDER_ATTACK"
const axios = require('axios')


// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3001/pokemons' para buscar todas las pokemons en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.
// export const getAllPokemons = () => dispatch => {};
export const getAllPokemons = () => dispatch => {
    return fetch('http://localhost:3001/pokemons')
    .then(res => res.json())
    .then(pokemons => dispatch({
        type: GET_ALL_POKEMONS,
        payload: pokemons,
    }))
    
};

// Usar ruta 'http://localhost:3001/pokemons/:id' para buscar una pokemon por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
// export const getPokemon = () => dispatch => {};
export const getPokemon = (id) => dispatch => {
    return fetch(`http://localhost:3001/pokemons/${id}`)
    .then(res => res.json())
    .then(pokemon => dispatch({
        type: GET_POKEMON,
        payload: pokemon,
    }))
};

export const getPokemons = (name) => dispatch => {
    return fetch(`http://localhost:3001/pokemons?name=${name}`)
    .then(res => res.json())
    .then(pokemons => dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
    }))
};


export const createPokemon = (data) => {
    return async (dispatch) => {
        await axios.post('/pokemons', data)
        return dispatch({type: CREATE_POKEMON})
    }
};

export const deletePokemon = (id) =>{
    return{
        type: DELETE_POKEMON,
        payload: id,
    }
};



export const getTypes = () => dispatch => {
    return fetch(`http://localhost:3001/types`)
    .then(res => res.json())
    .then(types => dispatch({
        type: GET_TYPES,
        payload: types,
    }))
};

export const filterTypes = (selection) => {
    return {
        type: FILTER_TYPES,
        payload: selection
    }
}
export const filterMadeBy = (selection) => {
    return {
        type: FILTER_MADE_BY,
        payload: selection
    }
}

export const clearDetails = () => {
    return {
        type: CLEAR_DETAILS
    }
}

export const order = (seleccion) => {
    return {
        type: ORDER,
        payload: seleccion
    }
}

export const orderAttack = (seleccion) => {
    return {
        type: ORDER_ATTACK,
        payload: seleccion
    }
}