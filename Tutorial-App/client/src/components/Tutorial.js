import React, { Component } from 'react';
import { render } from 'react-dom';
import '../index.css';

class Tutorial extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.obj.title} </h1>
            </div>
        )
    }
}

export default Tutorial;