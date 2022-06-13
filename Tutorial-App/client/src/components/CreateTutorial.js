import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './navbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../index.css';

export default class CreateTutorial extends Component {
    constructor(props) {
        super(props)
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStep = this.onChangeStep.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
            step: '',
            image: '',
        }
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value})
    }

    onChangeStep(e) {
        this.setState({ step: e.target.value })
    }

    onChangeImage(e) {
        this.setState({ image: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const tutorialObject = {
            title: this.state.title,
            description: this.state.description,
            step: this.state.step,
            image: this.state.image
        };
        axios.post('http://localhost:3001/tutorials/create', tutorialObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ title: '', description: '', step: '', image: ''})
    }

    render() {
        return (
            
            //<head>
                //<link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
            //</head>
            <main>
                    <div>
                        <Navigation />
                    </div>
                    <h1>Create a DIY Tutorial</h1>
                    <Form onSubmit={this.onSubmit}>
                        <div>
                            <Form.Group className="mb-3" controlid="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} placeholder="How to..." required />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlid="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.description} onChange={this.onChangeDescription} placeholder="Tell DIY-er's what you will be teaching them..." required />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group className="mb-3" controlid="formBasicStep">
                                <Form.Label>Step One</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.step} onChange={this.onChangeStep} placeholder="The first step is to..." required />
                            </Form.Group>
                        </div>
                        <div>
                            <Form.Group controlid="formFile" className="mb-3">
                                <Form.Label>Step One Image</Form.Label>
                                <Form.Control type="file" value={this.state.image} onChange={this.onChangeImage} />
                            </Form.Group>
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="light" size="lg">  
                                Add Step
                            </Button>
                            <Button variant="primary" size="lg" type="submit">
                                Create Tutorial
                            </Button>
                        </div>
                    </Form>
            </main>
                
            
            
        )
    }


}


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
            <head>
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
            </head>
            <div>
                <Navigation />
            </div>
            <h1>Create a DIY Tutorial</h1>
            <Form>
                <div>
                    <Form.Group className="mb-3" controlid="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="How to..." required />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3" controlid="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Tell DIY-er's what you will be teaching them..." required />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group className="mb-3" controlid="formBasicStep">
                        <Form.Label>Step One</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="The first step is to..." required />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlid="formFile" className="mb-3">
                        <Form.Label>Step One Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
                <div className="d-grid gap-2">
                    <Button variant="light" size="lg"  onClick={addStep} >
                        Add Step
                    </Button>
                    <Button variant="primary" size="lg" type="submit">
                        Submit
                    </Button>
                </div>
                

            </Form>
        </main>
    )
    
}

//export default CreateGuide


