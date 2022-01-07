import React, {Component} from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
    render(){
        return(
            <React.Fragment>
            <Navbar dark >
                <div className = "container">
                    <NavbarBrand href ="/"> Ristorante Con Fusion</NavbarBrand>
                 </div>
            </Navbar>
            <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Ristorante Con Fusion</h1>
                <p class="col-md-8 fs-4">We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
            </div>
            </div>
            {/* <Jumbotron>
            <div className = "container">
                <div className = "row row-header">
                    <div className = "col-12 col -sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p> We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
            </div>
            </Jumbotron> */}
            </React.Fragment>
        );
    }
}

export default Header;