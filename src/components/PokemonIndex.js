import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state={
      Cards: [],
      isLoaded: false,
      displayCards: [],
      // frontURL: true,
      // backURL: false
    }
  }
//  togglePokemon=(id)=>{
 
//  }


  searchTerm=(event)=>{
    const value = event.target.value
    this.setState({
      displayCards: this.state.Cards.filter(card => card.name.toLowerCase().includes(value.toLowerCase()))
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      this.setState({
        Cards: data,
        isLoaded: true,
        displayCards: data
      })
    })
  }

  addPoke = (pokemon) => {
      let arr=this.state.Cards
      arr.push(pokemon)

      this.setState({
        Cards: arr,
        displayCards: arr
      })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e) => this.searchTerm(e)} showNoResults={false} />
        <br />
        {this.state.isLoaded === true ? <PokemonCollection cards={this.state.displayCards} /> : "Loading" }
        
        <br />
        <PokemonForm addPoke={this.addPoke}/>
      </div>
    )
  }
}

export default PokemonPage
