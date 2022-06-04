import { useParams } from "react-router-dom"

function EditGuide(){
const {id} = useParams();
    return(
    <div>
        <h1>Edit page for guide with id {id}</h1>
    </div>
)
}

export default EditGuide

