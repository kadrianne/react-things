import React, {Component} from 'react'
import CardContainer from './CardContainer'

export default function MainContainer(props){
    return(
        <div className='main-container'>
            <CardContainer characters={props.characters} addToFavorites={props.addToFavorites} />
        </div>
    )
}