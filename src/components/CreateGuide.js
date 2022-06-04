const React = require('react')

function CreateGuide(){
    return (
        <main>
            <h1>Create a Tutorial!</h1>
            <form method="POST" action="/tutorial">
                <div classname="form-group">
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
                    <label htmlFor="image">Step Image</label>
                    <input className="form-control" id="image" name="image" />
                </div>
                

            </form>
        </main>
    )
}

export default CreateGuide



