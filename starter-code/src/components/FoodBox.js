import React, { Component } from 'react';

export default class FoodBox extends Component {
  
  constructor(props) {
      super(props);
      this.state = {props, quantity: 0}}

    quantity(event) {
      this.setState({
          quantity: event.target.value
    })
  }
  
  render(){
    //const {name, calories, image, quantity} = props;
    return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.image} alt=""/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.name}</strong> <br />
          <small>{this.props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={this.props.quantity}
            onChange={(e) => this.quantity(e)}
           
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div> 
    ) 
  };
}

