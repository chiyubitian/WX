import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Link, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import Aliindex from '../views/aliindex'
import SocialRecruitment from '../views/socialRecruitment'
import CampusRecruitment from '../views/campusRecruitment'
import UnderstandingAli from '../views/understandingAli'
import Personal from '../views/personal'
import Login from '../views/login'
import Register from '../views/register'
// import Navlink from '../components/nav'
export class Router extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <HashRouter>
                
                <Switch>
                    {/* <Redirect exact from="/" to="/aliindex"></Redirect> */}
                    <Route exact path="/aliindex" component={Aliindex}></Route>
                    <Route exact path="/socialRecruitment" component={SocialRecruitment}></Route>
                    <Route exact path="/campusRecruitment" component={CampusRecruitment}></Route>
                    <Route exact path="/understandingAli" component={UnderstandingAli}></Route>
                    <Route exact path="/personal" component={Personal}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    
                </Switch>
            
            </HashRouter>
        )
    }
}

export default Router
