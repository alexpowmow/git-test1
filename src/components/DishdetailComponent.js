import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    renderComments(comments) {
        if (comments != null) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return comments.map(comment => (
        <div key={comment.id} >
          <div className = "m-3">
          {comment.comment}
        </div>
          
          <div>
          -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}
          </div>
           
          
        </div>
      ));
        } {
            return(
                <div>

                </div>
            )
        }
  
      }
    
    
    render() {
        const { dish } = this.props;
        return (
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <Card>
                  <CardImg top width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle tag="h5"> {dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                {this.renderComments(dish.comments)}
              </div>
            </div>
          );
        }
}

export default DishDetail;