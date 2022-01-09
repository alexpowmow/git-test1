
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Routes, Route, Navigate, Redirect} from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }



  render(){
  
  const HomePage = () => {
    return(
      <Home dish ={this.state.dishes.filter((dish) => dish.featured)[0]} promotion ={this.state.promotions.filter((promo) => promo.featured)[0]} leader ={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      
    );
  }
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/home" element = {<HomePage />} />
        <Route exact path= "/menu" element= {<Menu dishes={this.state.dishes} />} />
        <Route exact path ="/contactus" element = {<Contact />}/>
      </Routes>
      
      
      <Footer />
    </div>
  );
  }
}


export default Main;
