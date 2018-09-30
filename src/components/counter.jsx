import React, { Component } from "react";
import Counters from "./counters";
import AddList from "./addlist"

class Counter extends Component {

  state = {
    value: this.props.counter.value
    // tags: []
  };

  // constructor(){
  //   super()
  //  this.handleIncrement= this.handleInvaluecrement.bind(this);
  // }
  // renderTags(){
  //   if(this.state.tags.length === 0) return <p> There are no tags!</p>;
  // return <ul>{this.state.tags.map(tag => <li key = {tag}> {tag}</li>)} </ul>;
  // }
  handleIncrement = () => {
    // this.state.count++;
    this.props.increase(this.props.counter.id)
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    // this.state.count++;
    if(this.state.value)this.props.decrease(this.props.counter.id)

    this.setState(prevState => ({
      value: prevState.value ? prevState.value - 1 : 0
    }));
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>
        <span>{this.props.counter.counterName}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button onClick={this.handleDecrement} className={this.getBtnClasses()}>
          -
        </button>

        <button onClick={this.handleIncrement} className="btn btn-primary">
          +
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  getBtnClasses() {
    let btnClasses = "btn btn-danger m-2 sm ";
    btnClasses += this.state.value === 0 ? "disabled" : "danger";
    return btnClasses;
  }

  formatCount() {
    // let { value } = this.state;
    // return value === 0 ? 0 : value;
    return this.state.value
  }

}

export default Counter;

//render tags
//{this.state.tags.length === 0 && 'Please create a new tag' }
//{this.renderTags()}
