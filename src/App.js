import React, {Component} from 'react'
import './App.css'
import MainContainer from './components/MainContainer';
import Favorites from './components/Favorites'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: [],
      favorites: []
    }
  }

  addToFavorites = (character) => {
    if (!this.state.favorites.find(charac => charac === character)) {
      this.setState({favorites: [...this.state.favorites, character]})
    }
  }

  removeFromFavorites = (character) => {
    let newFavorites = this.state.favorites.filter(fav => fav !== character)
    this.setState({favorites: newFavorites})
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(res => this.setState({
        characters: res.results
      }))
  }

  render(){
    return(
      <div className='App'>
        <Favorites favorites={this.state.favorites} action={this.removeFromFavorites}/>
        <h1>Rick and Morty Characters</h1>
        <MainContainer characters={this.state.characters} action={this.addToFavorites}/>
      </div>
    )
  }
}