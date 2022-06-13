import React, { Component } from 'react';
import Navigation from './navbar';
import '../index.css';

export default class Tutorials extends Component {
    render() {
        return (
            <main>
                <div>
                    <Navigation />
                </div>
                <div>
                    <p>Tutorials Component!</p>
                </div>
            </main>
        )
    }
}