import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import Navigation from './navbar';
import Tutorial from './Tutorial'
export default class ViewTutorial extends Component {

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
            <div>
                <div>
                    <Navigation />
                </div>
                <div>
                    {this.tutorial()}
                </div>
                
            </div>

        )
    }
}

