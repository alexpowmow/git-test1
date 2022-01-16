import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';

// componentDidMount(){
//   console.log('Dishdetail ComponentDidMount invoked');
// }

// componentDidUpdate(){
//   console.log('Dishdetail componentDidUpdate invoked');
// }

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
      // console.log("Current State is: " + JSON.stringify(values));
      console.log(this.props.addComment(this.props.dishId, values.rating, values.name, values.message));
    
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

    
function RenderComments({comments, addComment, dishId}) {
        if (comments != null) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return(
          <div className= "col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className = "list-unstyled">
        {comments.map((comment) => {
          return(
            <li key={comment.id}>
            <p>{comment.comment}</p>
            <p> -- {comment.author} , {new Date(comment.date).toLocaleDateString("en-US", options)}</p>
            </li>
          );
        })}
        </ul>

       <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
       
      );
        } else {
            return(
                <div>

                </div>
            )
        }
  
      }
    
  function RenderDish({dish}){
    return(
     
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle tag="h5"> {dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
     
    );
  }
    
   const DishDetail = (props) => {
      console.log('Dishdetail Component render invoked');
       if(props.isLoading){
         return(
            <div className="container">
              <div className="row">
                <Loading />
              </div>
            </div>
         );
       } else if(props.errMess){
        return(
          <div className="container">
            <div className="row">
              <h4>{props.errMess}</h4>
            </div>
          </div>
       );
       }
        if( props.dish == null){
          return(
            <div>

            </div>
        )
        }else{
        return (
            <div className= "container">
              <div className="row">
                  <Breadcrumb>
                    <BreadcrumbItem> <Link to='/menu'> Menu </Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                  </Breadcrumb>
              <div className = "col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
                </div>
              </div>
              <div className="row">
                  <RenderDish dish= {props.dish} />
                  <RenderComments comments = {props.comments} addComment={props.addComment} dishId={props.dish.id} />
              </div>
            </div>
          );
        }
      }
    


export default DishDetail;