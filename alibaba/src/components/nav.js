import React, { Component } from 'react'
import { NavLink, HashRouter, withRouter } from "react-router-dom"
import './nav.scss'
export class nav extends Component {
    constructor() {
        super()
        this.state = {
            nav_list: [{ name: "首页", path: "/aliindex" }, { name: "社会招聘", path: "/socialRecruitment" }, { name: "校园招聘", path: "/campusRecruitment" }, { name: "了解阿里", path: "/understandingAli" }, { name: "个人中心", path: "/personal" }],
            login: [{ name: "登录", path: "/login" }, { name: "注册", path: "/Register" }],
            active_index: 0,
        }
    }
    active(item,index) {
        this.setState({active_index : index}) 
        // this.props.history.push(item.path)
    }
    render() {
        let { nav_list, login, active_index } = this.state;
        return (
            <div className="menu">
                {nav_list.map((item, index) => {
                    return (
                        <HashRouter>
                            <li onClick={this.active.bind(this,item,index)} className={[index === 0 ? 'index' : '' ,active_index===index?'current-cat':''].join(" ")} key={index}>
                                <NavLink to={item.path}  >
                                    {item.name}
                                </NavLink>
                            </li>
                        </HashRouter>
                    )
                })}
                <div className="login" style={{ opacity: 0.8 }}>
                    欢迎来到阿里巴巴集团招聘！
                    {login.map((item, index) => {
                        return (
                            <HashRouter>
                                <NavLink to={item.path} key={index}>
                                    {item.name}
                                </NavLink>
                            </HashRouter>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default nav
