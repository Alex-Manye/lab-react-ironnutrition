import React, { Component } from "react";

class AddFood extends Component {

  constructor(props){
      super(props);

      this.state = { 
        name: '',
        calories: '',
        image: ''
      }
  }
  

  handleFormSubmit = (event) => {
    event.preventDefault();
    let newFood = this.state
    this.props.addFood(this.state);   
    this.setState({
      name: '',
      calories: '',
      image: ''
    })  
  }

handleChange = (event) => {
    let {name, value} = event.target;    
    this.setState({[name]: value});
  } 

render(){
  return(
    <div>
      <form onSubmit={this.handleFormSubmit}>
        <label>Add new food:</label>
        <input type="text" name="name" value={this.state.name} placeholder="Name of your food?" onChange={(e) => this.handleChange(e)} />
        <input type="text" name="calories" value={this.state.calories} placeholder="How many calories?" onChange={(e) => this.handleChange(e)} />
        <input type="text" name="image" checked={this.state.iamge} placeholder="Add an image (by Url)" onChange={(e) => this.handleChange(e)} />

        <button type="submit" value="Submit" />
      </form>
      </div>
    )
}
}

export default AddFood;
