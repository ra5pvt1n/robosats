import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect,useHistory } from "react-router-dom";

import UserGenPage from "./UserGenPage";
import MakerPage from "./MakerPage";
import BookPage from "./BookPage";
import OrderPage from "./OrderPage";
import BottomBar from "./BottomBar";

export default class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nickname: null,
        token: null,
        copiedToken: false,
        avatarLoaded: false,
        buyChecked: false,
        sellChecked: false,
        bookType:2,
        bookCurrency:0,
        bookCurrencyCode:'ANY',
        bookOrders:new Array(),
        bookLoading: true,
      }
    }
  
    setAppState=(newState)=>{
      this.setState(newState)
    }

    redirectTo(location) {
    this.props.history.push(location);
    }

    render() {
        return (
              <Router >
                  <div className='appCenter'>
                    <Switch>
                        <Route exact path='/' render={(props) => <UserGenPage {...props} {...this.state} setAppState={this.setAppState}/>}/>
                        <Route path='/ref/:refCode' render={(props) => <UserGenPage {...props} {...this.state} setAppState={this.setAppState}/>}/>
                        <Route path='/make' component={MakerPage}/>
                        <Route path='/book' render={(props) => <BookPage {...props} {...this.state} setAppState={this.setAppState} />}/>
                        <Route path="/order/:orderId" component={OrderPage}/>
                    </Switch>
                  </div>
                  <div className='bottomBar'>
                    <BottomBar redirectTo={this.redirectTo} {...this.state} setAppState={this.setAppState} />
                  </div>
              </Router>
          );
    }
}