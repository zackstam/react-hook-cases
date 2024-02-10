import React, { Component } from 'react';
import ContentHome from './ContentHome';

class Home extends Component {
    state = {
        data: {},
        status: true,
        counter: 0
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => this.setState({data: json }))
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h2>Hello world</h2>
                {this.state.data.title}
                <br/>
                { this.state.status ? <ContentHome counter={this.state.counter}/> : null } <br/>
                <button onClick={() => this.setState({ status: !this.state.status })}>toggle</button>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>add counter</button>

            </div>
        );
    }
}

export default Home;
