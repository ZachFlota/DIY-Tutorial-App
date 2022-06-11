import { useParams } from 'react-router-dom';
import Navbar from './navbar';
const React = require('react')

function Search(){
    let params = useParams();
    return (
        <main>
            <div>
                <Navbar />
            </div>
            <h1>Search results for {params.search}</h1>
        </main>
    )
}

export default Search