
// Importa las actions types que necesites acá:

import { DELETE_POKEMON, GET_ALL_POKEMONS, FILTER_TYPES, GET_POKEMONS, GET_TYPES, GET_POKEMON, CREATE_POKEMON, SEARCH_POKEMONS, CLEAR_DETAILS, ORDER, ORDER_ATTACK, FILTER_MADE_BY } from "../actions";


const initialState = {
  pokemons: [],
  AllPokemons: [],
  pokemon: {},
  pokemonDetails: {},
  pokemonsName: [],
  types: []
};


const rootReducer = (state = initialState, action) => {

  switch(action.type) {
      case GET_ALL_POKEMONS:
        if (!state.pokemons[0]) {
        return{
          ...state,
          pokemons: action.payload,
          AllPokemons: action.payload,
        }
      }
        else{
        return{
          ...state,
        }
      }
        case GET_POKEMONS:
          return{
            ...state,
            pokemonsName: action.payload,
          }
          case GET_TYPES:
            return{
              ...state,
              types: action.payload,
            }
      case GET_POKEMON:
        return{
          ...state,
          pokemonDetails: action.payload,
        }
      case SEARCH_POKEMONS:
          return{
            ...state,
            pokemons: state.pokemons.filter(elem => elem.type === action.payload)
          }
      case DELETE_POKEMON:
        return{
          ...state,
          pokemons: state.pokemons.filter(elem => elem.id !== action.payload)
        }
      case CREATE_POKEMON:
        return{
          ...state,
        } 

        case ORDER:
            const ordenarpor = (seleccion) => {
                if(seleccion === 'A-Z'){
                    let aZ = state.pokemons.sort((a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        else return -1})
                    return aZ
                    }
                else if(seleccion === 'Z-A'){
                    const zA = state.pokemons.sort((a, b) => {
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        else return -1})
                    return zA
                    }
                else return state.pokemons
                }
                return {
                  ...state,
                  pokemons: ordenarpor(action.payload)
              }
              case ORDER_ATTACK:
                const orderAttack = (seleccion) => {
                    if(seleccion === 'highest'){
                        let highest = state.pokemons.sort((a, b) => b.attack - a.attack)
                        return highest
                        }
                    else if(seleccion === 'lowest'){
                        const lowest = state.pokemons.sort((a, b) => a.attack - b.attack)
                        return lowest
                        }
                    else return state.AllPokemons
                    }
                return {
                    ...state,
                    pokemons: orderAttack(action.payload)
                }
              case FILTER_TYPES:
                  let typesfilter = action.payload === 'none' ? state.pokemons : state.pokemons.filter(r => r.type.includes(action.payload))
                  return {
                      ...state,
                      pokemons: typesfilter
                  }
              case FILTER_MADE_BY:
                const filtrarpor = (seleccion) => {
                  if(seleccion === 'Si'){
                    let Si = state.AllPokemons.filter(r => r.id.length === 36)
                    return Si
                  }
                  else if(seleccion === 'No'){
                    let No = state.AllPokemons.filter(r => r.id.length !== 36)
                    return No
                  }
                  else return state.AllPokemons
                }
                  return{
                    ...state,
                    pokemons: filtrarpor(action.payload)
                  }
                  
        case CLEAR_DETAILS:
            return {
                ...state,
                pokemonDetails: {}
            }
        default: return state

     
  };
};

export default rootReducer;