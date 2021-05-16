import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <section>
        <p>{name}</p>
        <p>{`Type: ${type}`}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <img src={image} alt={name}/>
      </section>
    )
  }
}

export default Pokemon;