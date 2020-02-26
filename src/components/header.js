import React, { Component } from 'react'
import './header.scss'
import Nav from './nav'
export class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-center">
                    <a href="https://job.alibaba.com/zhaopin/index.htm" className="logo" style={{ textAlign: 'right', width: '125px' }}>
                        <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" height="20" />
                    </a>
                    <i style={{ float: 'left', color: 'white', fontStyle: 'normal', fontSize: '20px', lineHeight: '52px', margin: '0 10px', opacity: 0.8 }}>|</i>
                    <i style={{ float: 'left', color: 'white', fontStyle: 'normal', fontSize: '14px', lineHeight: '54px', opacity: 0.8 }}>社招官网</i>
                    <Nav></Nav>
                </div>
            </div>
        )
    }
}

export default header
