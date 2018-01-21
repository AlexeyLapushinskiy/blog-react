/**
 * Created by Алексей on 21.01.2018.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel } from 'react-bootstrap';
import './signup.css';

class Signup extends Component {
    render() {
        return (
            <div className="signup">
                <Form horizontal >
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} smOffset={3} sm={2}>
                            Email
                        </Col>
                        <Col sm={3}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} smOffset={3} sm={2}>
                            Password
                        </Col>
                        <Col sm={3}>
                            <FormControl type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={7} sm={1}>
                            <Link to="/login">LogIn</Link>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={5} sm={3}>
                            <Button type="submit">Sign Up</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Signup;