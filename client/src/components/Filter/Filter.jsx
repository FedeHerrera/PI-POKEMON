import React from "react";
import "./Filter.css"
function Filter({handleMadeBy, handleTypes, handleOrder, handleAttackOrder}){

    return(
        
        <div className="filter">
            <label for="ordenado">Ordenado de:</label>
            <select name="ordenado" onChange={(e)=>handleOrder(e)}>
                <option value='none'>Seleccionar</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>

            <label for="ordenado">Segun su:</label>
            <select name="ataque" onChange={(e)=>handleAttackOrder(e)}>
                <option value='none'>Seleccionar</option>
                <option value='highest'>Mayor ataque</option>
                <option value='lowest'>Menor ataque</option>
            </select>

            <label for="usuario">¿Hecho por el usuario?:</label>
            <select name="usuario" onChange={(e)=>handleMadeBy(e)}>
                <option value='none'>Mostrar todos</option>
                <option value='Si'>Si</option>
                <option value='No'>No</option>
            </select>
            <label for="tipos">Filtrar por tipo:</label>
            <select name = "tipos" onChange={(e)=>handleTypes(e)}>
                <option value='none'>none</option>
                <option value='normal'>normal</option>
                <option value='fire'>fire</option>
                <option value='water'>water</option>
                <option value='grass'>grass</option>
                <option value='fighting'>fighting</option>
                <option value='flying'>flying</option>
                <option value='poison'>poison</option>
                <option value='electric'>electric</option>
                <option value='ground'>ground</option>
                <option value='rock'>rock</option>
                <option value='psychic'>psychic</option>
                <option value='ice'>ice</option>
                <option value='bug'>bug</option>
                <option value='ghost'>ghost</option>
                <option value='steel'>steel</option>
                <option value='dragon'>dragon</option>
                <option value='dark'>dark</option>
                <option value='fairy'>fairy</option>
            </select>
        </div>
    )
}

export default Filter;