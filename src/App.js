import React, {Component} from 'react';
import Shape from "./Shape";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: 'Square',
      totalClicks: 0,
      square: 0,
      circle: 0,
      triangle: 0,
      oval: 0,
      triangle_down: 0,
      triangle_left: 0,
      triangle_right: 0,
      trapezium: 0,
      star: 0
    };
  }

  selectedShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
      totalClicks: this.state.totalClicks + 1,
      [shapeName]: this.state[shapeName] + 1
    })
  }

  render () {
    return (
      <div className = "container">
        <div className = "navbar">
          <div>Selected: <span> {this.state.selectedShape}</span> </div>
        </div>
        <div className = "shape-list">
          <div>
            <Shape shape = "square" selectedShape = {this.selectedShape} />
            <Shape shape = "circle" selectedShape = {this.selectedShape} />
            <Shape shape = "triangle" selectedShape = {this.selectedShape} />
          </div>
          <div>
            <Shape shape = "oval" selectedShape = {this.selectedShape} />
            <Shape shape = "triangle_down" selectedShape = {this.selectedShape} />
            <Shape shape = "triangle_left" selectedShape = {this.selectedShape} />
          </div>
          <div>
            <Shape shape = "triangle_right" selectedShape = {this.selectedShape} />
            <Shape shape = "trapezium" selectedShape = {this.selectedShape} />
            <Shape shape = "star" selectedShape = {this.selectedShape} />
          </div>
        </div>
        <div className = "footer">
          <div>Total shapes clicked: <span> {this.state.totalClicks}</span> </div>
          <div className = "clickedShapes">
            <div>Square: <span> {this.state.square} </span> </div>
            <div>Circle: <span> {this.state.circle} </span> </div>
            <div>Triangle: <span> {this.state.triangle} </span> </div>
            <div>Oval: <span> {this.state.oval}</span> </div>
            <div>Triangle_down: <span> {this.state.triangle_down} </span> </div>
            <div>Triangle_left: <span> {this.state.triangle_left} </span> </div>
            <div>Triangle_right: <span> {this.state.triangle_right}</span> </div>
            <div>Trapezium: <span> {this.state.trapezium} </span> </div>
            <div>Star: <span> {this.state.star} </span> </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Selector;