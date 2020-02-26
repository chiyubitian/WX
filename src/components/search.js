import React, { Component } from 'react'
import './search.scss'
export class search extends Component {
    render() {
        return (
            <div className="search-box" style={{width:'490px', height: '60px', position: 'relative', border: 0, background: 'none', margin: '0 auto'}}>
                <span id="5868330273015233_span" className="search-topic" style={{ left: '15px', display: 'block' }}>请输入职位关键词</span>
                <div style={{width:'100%',height:'100%',background:'#fff',position:'absolute',opacity: 0.1, filter:'alpha(opacity=10)'}}></div>
                <input type="text" maxLength="30" topic="请输入职位关键词" style={{width:'368px',height:'40px','paddingTop': '6px','marginTop':'6px','marginLeft':'10px','boxSizing': 'borderBox','borderRadius':'3px'}}className="search-text" id="5868330273015233" />
                <input className="search-btn" data-spm-click="gostr=/hr;locaid=searchPosition" type="submit" style={{color:'#fff',background:'#F37327','fontSize':'14px','fontFamily':'PingFangSC-Regular',width: '92px',height: '40px','borderRadius':'3px','marginTop':'10px','marginLeft':'10px',position: 'relative','zIndex':2}} value="搜索" />
            </div>
        )
    }
}

export default search
