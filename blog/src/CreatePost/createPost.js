/**
 * Created by Алексей on 21.01.2018.
 */

import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Col } from 'react-bootstrap';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    sentPost = () => {
        console.log("Place for request for sent post");
    };

    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="formBasicText" >
                        <Col smOffset={2} sm={8}>
                            <FormControl type="text" placeholder="Title" /><br/>
                            <textarea placeholder="Create post..." maxlength="1000" cols="122" rows="10"></textarea>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={9} sm={3}>
                            <Button type="submit" onClick={this.sentPost}>Create Post</Button>
                        </Col>
                    </FormGroup>
                </form>

            </div>
        );
    }
}

export default CreatePost;