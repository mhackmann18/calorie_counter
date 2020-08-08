import React, { Component } from 'react';
import EditWindow from './EditWindow';

class FoodItem extends Component {
  state = {
    edit: false,
    servings: 1
  }

  edit = () => {
    this.setState({ edit: true });
  }

  cancelEdit = () => {
    this.setState({ servings: 1, edit: false });
  }

  quickAdd = () => {
    console.log(this.props.food);
  }

  setServings = (num) => {
    this.setState({ servings: num });
  }

  saveFood = (food) => {
    if(food.servings !== 0) {
      console.log(food);
    }
    this.cancelEdit();
  }

  render() {
    const { calories, name, brand, servingSize } = this.props.food;
    const { edit, servings } = this.state;
    return (
      <div className="food-item-area">
        <div className="food-item">
          <div className="food-item-label">
            <h3>{brand} {name}</h3>
            <p>{Math.floor(calories * servings)} Calories, Serving Size: {servingSize}</p>
          </div>
          <div className="food-item-btns">
            <button onClick={ edit ? this.cancelEdit : this.edit } className="btn-icon"><i className={edit ? "fas fa-times" : "fas fa-pencil-alt"}></i></button>
            <button onClick={ edit ? null: this.quickAdd } className="btn-icon"><i className={edit ? "fas fa-check" : "fas fa-plus"}></i></button>
          </div>
        </div>
        { this.state.edit &&
          <EditWindow food={this.props.food}
                      getServings={this.setServings} 
                      saveChanges={this.saveFood}/>
        }
      </div>
    )
  }
}

export default FoodItem;
