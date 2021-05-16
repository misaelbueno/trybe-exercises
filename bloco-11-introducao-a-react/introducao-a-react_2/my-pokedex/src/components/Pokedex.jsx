import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        {data.map((pokemon) => <Pokemon pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;