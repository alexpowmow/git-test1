
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Routes, Route, Navigate, Redirect, useMatch, useParams, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import About from './AboutComponent';


const mapStateToProps = (state) => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}


class Main extends Component {

  constructor(props) {
    super(props);
  }

  render(){
  
  const HomePage = () => {
    return(
      <Home dish ={this.props.dishes.filter((dish) => dish.featured)[0]} promotion ={this.props.promotions.filter((promo) => promo.featured)[0]} leader ={this.props.leaders.filter((leader) => leader.featured)[0]}/>
      
    );
  }

  const DishWithId = () => {
    let match = useMatch("/menu/:dishId");
    let params = useParams();
    console.log(match);
    return(
      <DishDetail dish= {this.props.dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]} comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}/>
    );

  }
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/home" element = {<HomePage />} />
        <Route exact path= "/menu" element= {<Menu dishes={this.props.dishes} />} />
        <Route path = "/menu/:dishId" element = {<DishWithId />} />
        <Route exact path ="/contactus" element = {<Contact />}/>
        <Route exact path ="/aboutus" element = {<About leaders = {this.props.leaders}/>} />
      </Routes>
      
      
      <Footer />
    </div>
  );
  }
}


export default connect(mapStateToProps)(Main);
