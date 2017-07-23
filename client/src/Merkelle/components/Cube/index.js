import React, { Component } from 'react';
import './style.css';

export default class extends Component {
  
  render() {
    return (
      <section className="container">
        <div id="cube">
          <figure className="front"></figure>
          <figure className="back"></figure>
          <figure className="right"></figure>
          <figure className="left"></figure>
          <figure className="top"></figure>
          <figure className="bottom"></figure>

          <figure className="worldmap"></figure>
        </div>
      </section>
    );
  }
}