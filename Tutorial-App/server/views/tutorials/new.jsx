const React = require('react')
import Navbar from './navbar';

function CreateGuide(){
    

    function addStep() {
       
        var newLabel = document.createElement('label')
        newLabel.innerHTML = 'Step'

        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text')
    
        var newImageLabel = document.createElement('label')
        newImageLabel.innerHTML = 'Image'

        var newImage = document.createElement('input');
        newImage.setAttribute('type', 'text')

        document.getElementById("newStep").appendChild(newLabel);
        document.getElementById("newStep").appendChild(newInput);
        document.getElementById("newStep").appendChild(newImageLabel);
        document.getElementById("newStep").appendChild(newImage);
        
    }

    return (
        <main>
            <div>
                <Navbar />
            </div>
            <h1>Create a Tutorial!</h1>
            <form method="POST" action="/:id">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" id="title" name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Write a description</label>
                    <input className="form-control" id="description" name="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="step">Step 1</label>
                    <input className="form-control" id="step" name="step" required />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image 1</label>
                    <input className="form-control" id="image" name="image" />
                </div>
                <div id="newStep"></div>
                <div>
                    <input type="button" value="Add Step" onClick={addStep} /> 
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Create Tutorial"></input>
                </div>
                

            </form>
        </main>
    )
}

export default CreateGuide
