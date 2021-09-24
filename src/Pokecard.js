import React from "react"
import './Pokecard.css'

const Pokecard = ({name, type, id, base_experience}) => {
    let link = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    return (
        <div className="Pokecard">
            <h4>{name}</h4>
            <img src={link} alt="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"/>
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    )
}

export {Pokecard}