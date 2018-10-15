import React from 'react';
import '../styles/nav-menu.css';
import '../styles/navigation.css';
import '../styles/style.css';
import cartImg from '../images/cart-icon.png';

export class NavigationComponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {hamClicked : false };
        this.handleCartClick = this.handleCartClick.bind(this);
        this.handleHamburgerClicked = this.handleHamburgerClicked.bind(this);
        this.handleReviewClicked = this.handleReviewClicked.bind(this);
    }
    handleReviewClicked()
    {
        this.props.showReviewScreen();
    }
    handleCartClick()
    {
        this.props.cartClicked();
    }
    handleHamburgerClicked()
    {
        this.setState ({hamClicked : !this.state.hamClicked});
        this.props.navClicked(!this.state.hamClicked);
    }
    render() { 
        return (  
            <header className="navigation">
            <div className="nav-wrapper">

            <nav role="navigation">
            <div id="menuToggle" className={this.state.hamClicked ? "open": "close"} onClick={this.handleHamburgerClicked}>
                <span className={this.state.hamClicked ? "paint-span": ""}></span>
                <span className={this.state.hamClicked ? "paint-span": ""}></span>
                <span className={this.state.hamClicked ? "paint-span": ""}></span>
                <ul id="menu" className={this.state.hamClicked ? "menu-showed":"menu-closed"}>
                <a href="#"><li>POČETNA</li></a>
                </ul>
            </div>
            </nav>
                <h1>FOODER</h1>
            </div>
            <div className="login-btn-wrap">
                <button onClick = {this.props.handleLoginClick} className="btn btn-outline-success btn-login">Prijavi se</button>
            </div>
                <ul className="nav-cart">
                   <li className="nav-cart-price">{this.props.navCartPrice} HRK</li>
                    <li onClick ={this.handleCartClick} className="nav-cart-img clickable"><img src={cartImg} height="40px" /></li>
                    
                </ul>
        </header>
        );

    }
}
