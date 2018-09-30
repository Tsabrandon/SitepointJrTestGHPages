import React, { Component } from "react";
import Counter from "./counter";
import AddList from "./addlist";


class Counters extends Component {
  state = {
    counters: [
      { id: 0, counterName: 'Cook', value: 0 },
      { id: 1, counterName: 'Food', value: 0 },
    ],
    totalCount: 0
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => {
      if (c.id !== counterId) {
        return c;
      }
      // console.log(this.state.counters)
      this.setState({ totalCount: this.state.totalCount - c.value });
    });

    this.setState({ counters });
  };
  add = name => {
    let counters = this.state.counters;
    this.setState({
      counters: [
        ...counters,
        { id: this.state.counters.length, counterName: name, value: 0 }
      ]
    });
  };
  increase = id => {
    const counters = this.state.counters.filter(c => {
      if (c.id !== id) {
        return c;
      }
      c["value"] += 1;
      return c;
    });

    this.setState({ totalCount: this.state.totalCount + 1, counters });
  };
  decrease = id => {
    const counters = this.state.counters.filter(c => {
      if (c.id !== id) {
        return c;
      }
      c["value"] -= 1;
      return c;
    });

    this.setState({ totalCount: this.state.totalCount - 1, counters });
    // this.setState({totalCount:this.state.totalCount-1})
  };
  render() {
    return (
      <div>
        <AddList add={this.add} />
        {this.state.counters.map(counter => {
          this.totalCount += counter.value;
          return (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              counter={counter}
              increase={this.increase}
              decrease={this.decrease}
            />
          );
        })}
        <div className="btn btn-primary">
          Total <span className="badge badge-light">{this.state.totalCount} </span>
        </div>
      </div>
    );
  }
}

export default Counters;
