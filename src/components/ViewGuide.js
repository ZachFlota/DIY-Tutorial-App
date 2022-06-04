import { useParams } from "react-router-dom"

function ViewGuide(){
const {id} = useParams();

return(
    <div>
        <h1>Page for guide with id {id}</h1>
    </div>
)
}

export default ViewGuide
