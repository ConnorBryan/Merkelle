import React, { Component } from 'react';
import './style.css';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      container: {},
      cube: {},
      figure: {},
      borderColor: 'blue',
    };
  }

  componentDidMount() {
    this.setState({
      container: this.getContainerStyle(),
      cube: this.getCubeStyle(),
      figure: this.getFigureStyle(),
    });
  }

  getContainerStyle = () => ({
    cursor: 'pointer',
    width: `${this.props.size}rem`,
    height: `${this.props.size}rem`,
    position: 'relative',
    perspective: `${this.props.size * 5}rem`,
  })

  getCubeStyle = () => ({
    width: '100%',
    height: '100%',
    position: 'absolute',
    transformStyle: 'preserve-3d',
    animationName: 'spinning',
    animationDuration: '8s',
    animationIterationCount: 'infinite',
  })

  getFigureStyle = () => ({
    margin: 0,
    width: `${this.props.size * 0.98}rem`,
    height: `${this.props.size * 0.98}rem`,
    display: 'block',
    position: 'absolute',
    border: `1px solid ${this.props.active ? 'orange' : this.state.borderColor}`,
  })

  toggleBorderColor = () => {
    const { borderColor } = this.state;
    this.setState({ borderColor: borderColor === 'blue' ? 'orange' : 'blue' });
  }

  generateFaces = () => [
    <figure
      key={'front'}
      style={{
        ...this.getFigureStyle(),
        transform: `rotateY(0deg) translateZ(${this.props.size / 2}rem)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        letterSpacing: '0.33rem',
        fontSize: '2em',
      }}>
      {this.props.index}
      </figure>,
    <figure
      key={'back'}
      style={{
      ...this.getFigureStyle(),
      transform: `rotateX(180deg) translateZ(${this.props.size / 2}rem)`,
      }} />,
    <figure
      key={'left'}
      style={{
      ...this.getFigureStyle(),
      transform: `rotateY(90deg) translateZ(${this.props.size / 2}rem)`,
      }} />,
    <figure
      key={'right'}
      style={{
      ...this.getFigureStyle(),
      transform: `rotateY(-90deg) translateZ(${this.props.size / 2}rem)`,
      }} />,
    <figure
      key={'top'}
      style={{
      ...this.getFigureStyle(),
      transform: `rotateX(90deg) translateZ(${this.props.size / 2}rem)`,
      }} />,
    <figure
      key={'bottom'}
      style={{
      ...this.getFigureStyle(),
      transform: `rotateX(-90deg) translateZ(${this.props.size / 2}rem)`,
      }} />,
  ]

  render() {
    const {
      container,
      cube,
    } = this.state;

    return (
      <section
        style={container}
        onMouseEnter={this.toggleBorderColor}
        onMouseLeave={this.toggleBorderColor}>
        <div style={cube}>
          {this.generateFaces()}
        </div>
      </section>
    );
  }
}