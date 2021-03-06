import React from 'react';
import ReactDOM from 'react-dom';
import {StateComponent} from './components/stateComponent';
import {MainComponent} from './components/main/mainComponent';
import {LocationComponent} from './components/locationComponent';
import {CartComponent} from './components/cartComponent';
import {NavigationComponent} from './components/navigationComponent';
import {OrderPreview} from './components/preview/orderPreviewComponent';
import './styles/style.css';
import './styles/final.css';
import { ChangeRestoran } from './components/changeRestoran';
import { restoran } from './data/restaurants';
import {RestoranInfoComponent} from './components/restoran/restoranInfoComponent';
import {LoginModal} from './components/login/loginModal.js';
import fire from './config/FirebaseConfig.js';
import {EditModal} from './components/login/editModal.js';
import {InfoModal} from './components/info/infoModal.js';
import {ChangePasswordModal} from './components/login/changePasswordModal.js';

export class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
        Grad : '', Kvart : '',Restoran : '', RestoranInfo : '',infoShow : false,
         reviewShow : false,Meal : {}, app_state:0,finalOrder : {},clearCart:false,showCart : false,showNav : false, navCartPrice : 0, 
         showLogin : false,signedInUser : null,showInfoModal : false, showEditModal : false, showChangePasswordModal : false
        
        };

        this.handleLocationSelected = this.handleLocationSelected.bind(this);
        this.handleRestoranSelected = this.handleRestoranSelected.bind(this);
        this.forceRestSelect = this.forceRestSelect.bind(this);
        this.getMeal = this.getMeal.bind(this);
        this.cartClicked = this.cartClicked.bind(this);
        this.navClicked = this.navClicked.bind(this);
        this.cartBack = this.cartBack.bind(this);
        this.priceChange =this.priceChange.bind(this);
        this.getFinalOrder = this.getFinalOrder.bind(this);
        this.closePreview = this.closePreview.bind(this);
        this.finishPreview = this.finishPreview.bind(this);
        this.showRests = this.showRests.bind(this);
        this.handleShowComments = this.handleShowComments.bind(this);
        this.handleCloseRestInfo = this.handleCloseRestInfo.bind(this);
        this.showReviewScreen = this.showReviewScreen.bind(this);
        this.handleRevClose = this.handleRevClose.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLoginClose = this.handleLoginClose.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);
        this.logoutUser = this.logoutUser.bind(this); 
        this.closeInfoModal = this.closeInfoModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
        this.closeChangePasswordModal = this.closeChangePasswordModal.bind(this);
        
    }
    componentWillMount()
    {  
        this.removeAuthListener = fire.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                this.setState({signedInUser : user})
            }
            else
            {
                this.setState({signedInUser : null})
            }
        })
    }
    componentWillUnmount()
    {
        this.removeAuthListener();
    }
    logoutUser()
    {
        fire.auth().signOut();
    }
    userLoggedIn()
    {
        this.setState({showLogin : false})
    }
    handleLoginClick()
    {
        this.setState({showLogin : true})
    }
    handleEditClick()
    {
        this.setState({showEditModal : true})
    }
    closeEditModal()
    {
        this.setState({showEditModal : false})
    }
    handleChangePasswordClick()
    {
        this.setState({showChangePasswordModal : true})
    }
    closeChangePasswordModal()
    {
        this.setState({showChangePasswordModal : false})
    }
    
    handleLoginClose()
    {
        this.setState({showLogin : false})
    }
    handleRevClose(){
        this.setState({reviewShow:false});
    }
    showReviewScreen()
    {
        this.setState({reviewShow : true})
    }
    finishPreview()
    {
        this.setState({app_state: 1,Restoran:'', Meal : {},finalOrder : {},clearCart : true,showCart : false,showNav : false,navCartPrice : 0});
    }
    closePreview()
    {
        if(this.state.Restoran !== '')
        this.setState({app_state: 2});
        else
        this.setState({app_state : 1});
    }
    cartClicked()
    {
            this.setState({Meal : null,showCart : !this.state.showCart});
    }
    navClicked(value)
    {
            this.setState({Meal : null,showNav : value});
    }
    cartBack()
    {
        this.setState({Meal : null,showCart : false});
    }
    forceRestSelect()
    {
        this.setState({Restoran:'',Meal : null, app_state : 1})
    }
    handleLocationSelected(grad,kvart)
    {
        if( grad != '' && kvart != '')
        {
            this.setState({ Grad : grad, Kvart : kvart, Restoran : '',Meal : null, app_state : 1});
        }
        else
        {
            this.setState({ Grad : grad, Kvart : kvart, Restoran : '',Meal : null, app_state : 0});
        }
      
    }
    handleRestoranSelected(restoran)
    {
        if(this.state.Restoran !== restoran)
            this.setState({Restoran : restoran ,infoShow:false,Meal : null, app_state : 2,clearCart : false});
    }
    handleCloseRestInfo(){
        this.setState({infoShow : false});
    }
    handleShowComments(restoran)
    {
        this.setState({infoShow  : true, restoranInfo:restoran})
    }
    showRests()
    {
        this.setState({Restoran : '',Meal : null, app_state : 1});
    }
    getMeal(meal)
    {
        var newPrice = parseInt(meal.price) + this.state.navCartPrice;
        this.setState({Meal : meal,navCartPrice : newPrice});
    }
    getFinalOrder(order)
    {
        if(this.state.signedInUser == null)
        {
            this.setState({ Meal : null,showInfoModal : true, infoMessage : 'Please log in to continue'});
        }
        else
        {
        this.setState({app_state : 3,finalOrder:order,Meal : null});
        }
    }
    priceChange(price,rest)
    {
       let newPrice = this.state.navCartPrice - parseInt(price);
       let restoran = this.state.Restoran;
        if(rest)
            this.setState({navCartPrice : newPrice,Meal : null,Restoran : '',app_state : 1});
        else
            this.setState({navCartPrice : newPrice,Meal : null });
    }
    closeInfoModal()
    {
        this.setState({showInfoModal : false, infoMessage : ''})
    }
    closeEditModal()
        {
            this.setState({showEditModal : false})
        }
    close
   
    render() 
    {   
        var orderPreview = null;
        var restoranInfo = null;
        var reviewWindow = null;
        var restoranOdabran = null;
        if(this.state.app_state == 2)
            {
                restoranOdabran = <ChangeRestoran showRests = {this.showRests}/>
            }
        else
        {
            restoranOdabran = null;
        }

        if(this.state.app_state == 3)
        {
        orderPreview = 
        <div className = "preview-showed">
            <div className="preview">
                <OrderPreview signedInUser = {this.state.signedInUser} finishPreview = {this.finishPreview} closePreview = {this.closePreview} order = {this.state.finalOrder} />
            </div>
        </div>
        }
        if(this.state.infoShow)
        {
        restoranInfo = 
        <div className = "preview-showed">
            <div className="preview">
                <RestoranInfoComponent handleCloseRestInfo = {this.handleCloseRestInfo} handleRestoranSelected = {this.handleRestoranSelected} restoran = {this.state.restoranInfo} />
            </div>
        </div>
        }
        if(this.state.reviewShow)
        {
        reviewWindow = 
        <div className = "preview-showed">
            <div className="preview">
                <ReviewComponent handleRevClose = {this.handleRevClose} />
            </div>
        </div>
        }
        
    return(
      
        <div className="site">

            <NavigationComponent logoutUser = {this.logoutUser} signedInUser = {this.state.signedInUser} handleLoginClick = {this.handleLoginClick} handleEditClick={this.handleEditClick} showReviewScreen = {this.showReviewScreen} cartClicked = {this.cartClicked} navClicked = {this.navClicked} navCartPrice = {this.state.navCartPrice}/>
            
            <LocationComponent  handleLocationSelected = {this.handleLocationSelected}/>
            {restoranOdabran}
            <main id="id-main" className="main">
                <div  className="main-state">
                    <StateComponent stanje = {this.state.app_state} restoran = {this.state.Restoran}/>
                </div>
            <MainComponent grad={this.state.Grad} kvart={this.state.Kvart} 
                app_state={this.state.app_state} handleRestoranSelected={this.handleRestoranSelected} handleShowComments = {this.handleShowComments} 
                getMeal = {this.getMeal} />
            </main>
            <aside className={ this.state.showCart ? "aside" : "aside cart-closed" }>
            { 
            <CartComponent clearCart = {this.state.clearCart} cartBack = {this.cartBack} selectedRest = {this.state.Restoran} selectedMeal = {this.state.Meal} 
            forceRestSelect = {this.forceRestSelect} showCart ={this.state.showCart} 
            getFinalOrder = {this.getFinalOrder} priceChange={this.priceChange}/> 
            }
            </aside>
            {orderPreview}
            {restoranInfo}
            {reviewWindow}
            <footer className="footer">COPYRIGHT © 2018. Branimir Cvitanušić</footer>
            
            <div className={this.state.showCart || this.state.showNav  ? "cover" : "hider"}></div>
            <div className={this.state.app_state == 3 || this.state.infoShow  || this.state.reviewShow ? "preview-cover" : "hider"}></div>
        
            {/* LOGIN MODAL */}
            <LoginModal userLoggedIn = {this.userLoggedIn} visible = {this.state.showLogin} onClose = {this.handleLoginClose} />
            <EditModal signedInUser = {this.state.signedInUser} visible = {this.state.showEditModal} onClose = {this.closeEditModal} handleChangePasswordClick = {this.handleChangePasswordClick} />
            <ChangePasswordModal visible = {this.state.showChangePasswordModal} onClose = {this.closeChangePasswordModal} />
            <InfoModal visible = {this.state.showInfoModal} message = {this.state.infoMessage} onClose = {this.closeInfoModal}/>
        </div>
     
      );     
    }
  }

  




  