import React, { Component } from 'react';
import '../index.css';
import Navigation from './navbar';

class Tutorial extends Component {
    render() {
        return (
            <div className="tutorial">
                <h2> {this.props.obj.title} </h2>
                <p> {this.props.obj.description} </p>
            </div>
                
            
        )
    }
}

export default Tutorial;
    