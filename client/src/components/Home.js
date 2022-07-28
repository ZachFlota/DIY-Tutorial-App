import Navigation from './navbar';
import '../index.css';
const React = require('react');
import banner from '../assets/banner.jpg'


function Home(){
    return (
        <main>
            <div>
                <Navigation />
            </div>
            <div >
                <img id="banner" src={banner}
                    alt="home banner">
                </img>
            </div>
            <h1>Home</h1>
        </main>
    )
}

export default Home