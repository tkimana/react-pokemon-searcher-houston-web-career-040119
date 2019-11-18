import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      flipCard: true
    }
  }

  togglePokemon=()=>{
  this.setState({
    flipCard: !this.state.flipCard
  })
  }
  render() {

    let cardSide 
    if(this.state.flipCard===true){
      cardSide= this.props.card.sprites.front
    }
    else{
      cardSide=this.props.card.sprites.back
    }
     
    // console.log(this.props.card.stats.find( stat => stat.name === "hp").value)
    // debugger
    return (
      <Card>
        <div>
          <div className="image"onClick={this.togglePokemon}>
            <img src={cardSide} alt="oh no!"/>
            
          </div>
          <div className="content">
            <div className="header">{this.props.card.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              
              {this.props.card.stats.find(stat => stat.name === "hp").value}
             
              {/* {this.props.card.abilities} */}
              {/* {this.props.card.height}
              {this.props.card.types}
              {this.props.card.weight}
              {this.props.card.moves} */}
              
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
