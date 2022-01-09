import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';




// componentDidMount(){
//   console.log('Dishdetail ComponentDidMount invoked');
// }

// componentDidUpdate(){
//   console.log('Dishdetail componentDidUpdate invoked');
// }
    
function RenderComments({comments}) {
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
                  <RenderComments comments = {props.comments} />
              </div>
            </div>
          );
        }
      }
    


export default DishDetail;