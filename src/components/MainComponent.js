
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }



  render(){
  
  const HomePage = () => {
    return(
      <Home />
      
    );
  }
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/home" element = {<HomePage />} />
        <Route exact path= "/menu" element= {<Menu dishes={this.state.dishes} />} />
        
      </Routes>
      
      <Footer />
    </div>
  );
  }
}


export default Main;
