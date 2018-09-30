import React, { Component } from "react";


class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
        <div className="header mx-sm-3 mb-2">
          <form
            className="needs-validation form-inline"
            onSubmit={event => {
              event.preventDefault();
              this.props.add(this.state.name);
              this.setState({ name: "" });
            }}
          >
            <div className="form-group mx-sm-3">
              <input
                type="text"
                className="form-control mr-1"
                required
                value={this.state.name}
                onChange={name => this.setState({ name: name.target.value })}
                placeholder="please input field"
              />
              <button className="btn btn-primary" type="submit">
                add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddList;
