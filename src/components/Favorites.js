import React from 'react'
import Card from './Card'

export default function Favorites(props){
    const characters = props.favorites.map(character => {
        return <Card character={character} action={props.action} />
    })

    return (
        <section className='favorites'>
            <ul>
                {characters}
            </ul>
        </section>
    )
}