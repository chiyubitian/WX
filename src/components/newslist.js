import React, { Component, Fragment } from 'react'
import Mock from 'mockjs' 
import './newslist.scss'
export class newslist extends Component {

	render() {
		// console.log(Mock)
		return (
			<Fragment>
				<div className="newPosition-list" style={{ width: '850px', height: '300px' }}>
					<div className="more-positon">
						最新职位
					<a className="clickMorePosition" data-spm-click="gostr=/hr;locaid=newPositionMore">更多</a>
					</div>
					<ul className="position-list">
						<li className="scroll-5">
							<a href="/zhaopin/PositionDetail.htm?positionCode=GP565031&amp;" title="集团客户体验事业部-产品运营专家-商家及B类体验-零售通智能服务" className="position">集团客户体验事业部-产品运营专家-商家及B类体验-零售通智能服务</a>
							<em className="time">2分钟前</em>
							<em className="city">杭州</em>
						</li>
					</ul>
				</div>
			</Fragment>
		)
	}
}

export default newslist
