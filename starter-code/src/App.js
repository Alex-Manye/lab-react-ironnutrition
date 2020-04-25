import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './data/foods.json';
import './components/FoodBox';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import './components/AddFood';

class App extends Component {

  state = {
    foods,
    displayNewFood: false,
    todaysFood: [{ name: "hamburger", calories: 400, quantity: 1,
    }]
  }

  toggleDisplayNewFood = () => {
    this.setState({
      displayNewFood: !this.state.displayNewFood
    })
  }

  addFood = (newFood) => {
    foods.push(newFood)
    this.setState({
      foods
    })
  }


  render() {
    console.log(foods)
    console.log(this.state.displayNewFood)
    {this.state.displayNewFood ?
        <div>
          <button onClick={() => this.toggleDisplayNewFood()}>No</button>
          <AddFood addFood={(newFood) => this.addFood(newFood)} />
        </div>
        :
        <button onClick={() => this.toggleDisplayNewFood()}>Create a new Food</button>
    }


    return (
      <div className="App">
      {foods.map((food, index)=> {
       return <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
        })}
      </div>
    )}
}
export default App;
