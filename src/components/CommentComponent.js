import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Row, Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen:false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values))
      
    }

    render(){
        return(
        <React.Fragment>
            <Button color="primary" onClick={this.toggleModal}>
                <span>Submit Comment</span>
            </Button>

        
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating">Rating</Label>
                        <Col>
                            <Control.select model=".rating" id = "rating" name="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                           <Errors className = "text-danger" model=".rating" show="touched" messages={{required: 'Required'}}/>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="name">Your Name</Label>
                        <Col>
                            <Control.text model=".name" id="name" name="name" className="form-control" validators = {{required, minLength: minLength(3), maxLength: maxLength(15)}}/>
                            <Errors className = "text-danger" model=".name" show="touched" messages={{required: 'Required', minLength: 'Must be greater than 2 characters', maxLength: 'Must be 15 characters or less'}}/>
                        </Col>
                       
                       
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="message" >
                            Comment
                        </Label>
                        <Col >
                            <Control.textarea model=".message" id = "message" name="message" rows="12" className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col >
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </ModalBody>
            </Modal>

        </React.Fragment>
        );

    }
}

export default CommentForm;