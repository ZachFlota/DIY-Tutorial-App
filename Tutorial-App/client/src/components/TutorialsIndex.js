import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './navbar';
import Tutorial from './Tutorial';
import '../index.css';

export default class TutorialsIndex extends Component {
    
    constructor(props) {
        super(props);
        this.state = { tutorialsCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/tutorials/tutorials')
        .then(res => {
            this.setState({ tutorialsCollection: res.data });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    tutorial() {
        return this.state.tutorialsCollection.map((data, i) => {
            return <Tutorial obj={data} key={i} />;
        });
    }
     
    render() {
        return (
            <main>
                <div>
                    <Navigation />
                </div>
                <div>
                    <h1>Tutorials</h1>
                </div>
                <div className="tutorialIndex">
                    {this.tutorial()}
                </div>
            </main>


        )
    }
    
}

