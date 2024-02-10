import React, { Component } from 'react';

class ExampleClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
        console.log('test 1', this.state.count);
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        console.log('test 2', this.state.count);
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
}


export default ExampleClass;
