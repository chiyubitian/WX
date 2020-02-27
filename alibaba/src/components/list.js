import React, { Component } from 'react'
import './list.scss'
export class list extends Component {
    constructor() {
        super()
        this.state = {
            list: [{ name: 'JAVA' }, { name: 'IOS' }, { name: '数据' }, { name: '安全' }, { name: '搜索' }, { name: '算法' }, { name: '运营' }, { name: '视觉' }, { name: '交互' }, { name: '前端' },]
        }
    }
    handleClick(e){
	e.preventDefault();
}
    render() {
        let { list } = this.state
        return (
            <div className="hot-text" style={{ 'textAlign': 'center'}}>
                热门搜索：
				{list.map((item, index) => {
                    return (
                        <a onClick={this.handleClick.bind(this)} key={index} className="search-key" href="" data-spm-click="gostr=/hr;locaid=hotPosition">{item.name}</a>
                    )
                })}
            </div>
        )
    }
}

export default list
