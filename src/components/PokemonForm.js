import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  addPokemon=(e)=>{
    // debugger
      this.setState({

        [e.target.name]: e.target.value
      })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    // debugger


    fetch(`http://localhost:3000/pokemon`,{
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name,
      stats: [{
        name: 'hp',
        value: this.state.hp
      }],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }) 
  })
  .then(res => res.json())
  .then(obj => 
    this.props.addPoke(obj)
    )
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => this.addPokemon(e)} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => this.addPokemon(e)} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={(e) => this.addPokemon(e)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={(e) => this.addPokemon(e)} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
