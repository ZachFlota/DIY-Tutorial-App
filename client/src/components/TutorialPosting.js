import React, { Component } from 'react';
import '../index.css';



class TutorialPosting extends Component {
    render() {
        return (
            <div className="tutorial">
                
                <a href={`/tutorials/${this.props.obj._id}`}>
                    <h2> {this.props.obj.title} </h2>
                </a>
                <p> {this.props.obj.description} </p>
            </div>
                
            
        )
    }
}

export default TutorialPosting;
    