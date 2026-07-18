//@ts-nocheck

import React , {Component} from "react";


class Test extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeDetail = () => {
    this.setState({color: "blue", model: "Tesla" , year: "2001"});
  }

  componentDidMount(){   // runs after the first render() lifecycle
    console.log("componentDidMount")
    }
  componentWillUnmount() {  // runs before the component is removed from the DOM
    console.log("componentWillUnmount")
  }
  componentDidUpdate(){   // runs after the first render() lifecycle
    console.log("didUpdate") //
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          color: {this.state.color} ,
          model: {this.state.model}.
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change detail</button>
      </div>
    );
  }
}

export default Test