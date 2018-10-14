import React from 'react';
import '../../styles/main/mealAdding.css';
export class Checkbox extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { isChecked : false};
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
        this.handleCheckboxClicked = this.handleCheckboxClicked.bind(this);
    }
    
    toggleCheckboxChange(){
        this.setState(({ isChecked }) => (
          {
            isChecked: !isChecked,
          }
        ));
      }
    handleCheckboxClicked(){
        if(this.state.isChecked)
        {
          this.props.handleAddingMinus(this.props.label,this.props.price);
        }
        else
        {
          this.props.handleAddingPlus(this.props.label,this.props.price);
        }
    }
  render()
  {
    const { isChecked } = this.state;
    let isDisabled = false;
    if(this.props.isDisabled == 'true')
    {
      isDisabled = true;
    }
    else
    {
      isDisabled = false;
    }
    return (
        <div className = "adding-check">
          <label className="checkbox-container">
          <input
                onClick = {this.handleCheckboxClicked}
                type="checkbox"
                disabled = {isDisabled}
                value={this.props.label}
                checked={isDisabled ? "true" : isChecked}
                onChange={this.toggleCheckboxChange}
                />
          <span className="checkmark"></span>
          </label>  
          <span className = {this.state.isChecked ? "checked" : "not-checked" }>{this.props.label}</span>
          <span className = {this.state.isChecked ? "checked" : "not-checked" }>{this.props.price} kn</span>
        </div>
    );
  }
}
