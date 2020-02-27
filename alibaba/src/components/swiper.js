import React, { Component ,Fragment } from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.min.css";
import './swiper.scss'
export class swiper extends Component {
    componentWillUpdate() {
        this.initBanner()
    }
    initBanner(){
        let mySwiper = new Swiper ('.swiper-container', {
            autoplay : 5000,
            speed:300,
            direction: 'horizontal',
            grabCursor : true,
            roundLengths: true, 
            lazyLoading : true,
            // autoHeight: true,
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
            })        
        }

    render() {
        return (
            <Fragment>
                {/* 轮播 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" >
                            <a href="">
                                <img src="https://img.alicdn.com/tfs/TB18vyRwbY1gK0jSZTEXXXDQVXa-1600-160.jpg" />
                            </a>
                        </div>
                        
                    </div>
                    {/* 如果需要分页器 */}
                    <div className="swiper-pagination"></div>

                    {/* 如果需要导航按钮 */}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/* 如果需要滚动条  */}
                    <div className="swiper-scrollbar"></div>
                </div >
            
            </Fragment>
        )
    }
}

export default swiper
