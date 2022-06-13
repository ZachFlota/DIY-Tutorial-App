import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';

export default class CreateUser extends Component {
    
    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }

    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ lastName: e.target.value })
    }
    
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
        };
        axios.post('http://localhost:3001/tutorials/create-user', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ firstName: '', lastName: '', email: '', password: '' })
    }
    
    render() {
        return (
            <Form id="register" onSubmit={this.onSubmit} action="http://localhost:3000/home">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlid="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" value={this.state.firstName} onChange={this.onChangeFirstName} placeholder="Enter First Name" required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlid="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={this.state.lastName} onChange={this.onChangeLastName} placeholder="Enter Last Name" required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlid="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} label="Enter Email" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlid="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword} placeholder="Create Password" />
                        </Form.Group>
                    </Row>                    


                    <Button variant="primary" type="submit">
                        Create Account
                    </Button>
            </Form>

        )
    }
}