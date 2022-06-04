import { useParams } from "react-router-dom"

function Search(){
    const {searchTerm} = useParams();
    return (
        <div>
            <h1>Search results for {searchTerm}</h1>
        </div>
    )
}

export default Search
