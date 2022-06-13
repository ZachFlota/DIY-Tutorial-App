const React = require('react');
import { render } from '@testing-library/react';
import { useState } from 'react';
import Navigation from './navbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import '../index.css';


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

export default CreateGuide


