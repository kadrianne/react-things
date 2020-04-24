import React from 'react'

export default function Card(props) {
    const {character, addToFavorites, removeFromFavorites} = props

    function handleClick(){
        if (addToFavorites){
            addToFavorites(character)
        } else {
            removeFromFavorites(character)
        }
    }

    return (
        <div className='card' onClick={handleClick}>
            <h3>{character.name}</h3>
            <img src={character.image} alt='name' />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
}
