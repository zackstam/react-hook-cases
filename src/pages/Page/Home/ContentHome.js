import React, { Component } from 'react';
let timerInterval;

class ContentHome extends Component {

    componentWillUnmount() {
        // console.log('will unmount')
        clearTimeout(timerInterval)
    }

    componentDidMount() {
        console.log('props counter ', this.props.counter);
        timerInterval = setTimeout(() => {
            console.log('timeout');
        }, 5000);
    }

    componentDidUpdate() {
        console.log(this.props.counter);
        if (this.props.counter > 5) {
           
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true;
    }

    render() {
        console.log('rendering');
        return (
            <div>
                { this.props.counter }
                content home
            </div>
        );
    }
}

export default ContentHome;
