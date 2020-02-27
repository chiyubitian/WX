import React, { Component } from 'react'
import Swiper from '../components/swiper'
export class socialRecruitment extends Component {

    componentDidUpdate() {
        this.initBanner()
    }
    
    render() {
        return (
            <div>
                <Swiper/>
            </div>
        )
    }
}

export default socialRecruitment
