import React, { Component, Fragment } from 'react'
import './aliindex.scss'
import Search from '../components/search'
import List from '../components/list'
import Newslist from '../components/newslist'
import Footer from '../components/footer'
export class aliindex extends Component {
    constructor() {
        super()
        this.state = {
            text_list: [{ message: 'If not now, when?' }, { message: 'If not me, who?' }, { message: '此时此刻，非我莫属!' }]
        }
    }
    render() {
        let { text_list } = this.state
        return (
            <Fragment>
                <div id="J-index-main" className="index-main">
                    <img className="index-image" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" style={{ 'verticalAlign': 'middle', width: '1440px', height: '478px' }} alt=""></img>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(31, 56, 88, 0.40)' }}></div>
                    <div id="index-mid-box" className="index-mid-box" style={{ height: '100 %' }}>
                        <form className="J-search-form">
                            <div className="float-mid" >
                                {text_list.map((item, index) => {
                                    return (
                                        <p key={index} className="en-world">{item.message}</p>
                                    )
                                })}
                                <Search />
                                <List />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="newPosition" style={{ height: '364px', width: '100%', overflow: 'hidden' }}>
                    <div className="newPosition-content" style={{ width: '1180px', height: '300px', margin: '32px auto' }}>
                        <Newslist />
                        <div style={{ width: '310px', float: 'right' }}>
                            <a className="show-pic pic-1 jumpToAliyun" href="https://www.aliyun.com/careers" data-spm-click="gostr=/hr;locaid=aliyun"><img style={{ width: '179px' }} src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt=""/></a>
                            <a className="show-pic pic-2 jumpToEhr" href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?" data-spm-click="gostr=/hr;locaid=xinxipingtai"><img style={{ width: '260px' }} src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt=""/></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>

        )
    }
}

export default aliindex
