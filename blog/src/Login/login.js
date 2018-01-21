/**
 * Created by Алексей on 21.01.2018.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, Checkbox } from 'react-bootstrap';
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login">
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
                        <Col smOffset={5} sm={2}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                        <Col ssmOffset={2} sm={1}>
                            <Link to="/signup">SignUp</Link>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={5} sm={3}>
                            <Button type="submit">Log In</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;