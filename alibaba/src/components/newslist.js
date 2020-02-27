import React, { Component, Fragment } from 'react'
import Mock from 'mockjs'
import './newslist.scss'
export class newslist extends Component {
	constructor() {
		super()
		this.state = {
			data: []
		}
	}
	listData() {
		let res = Mock.mock({
			"data|50": [
				{
					"_id": "@id",
					"work": "@cword(3,8)-@cword(4,8)-@cword(3,5)-@cword(4,10)",
					"city": "@city()",
					"time": "@date('2020/02/27 HH:mm:ss')",
				}

			]
		})
		res.data.map((item, index) => {
			let publish_time = new Date(item.time)
			let now = new Date()
			let time_diff = Math.abs(publish_time - now)
			let minute = Math.floor(time_diff / 1000 / 60)
			item.time = minute
			return item
		})
		res.data.sort((a, b) => {
			return a.time - b.time
		})
		return res.data
	}
	tarnslateTop() {
		
	}
	componentDidMount() {
		let data = this.listData()
		this.setState({data})
	}
	
	render() {
		let { data } = this.state
		return (
			<Fragment>
				<div className="newPosition-list" style={{ width: '850px', height: '300px' }}>
					<div className="more-positon">
						最新职位
					<a className="clickMorePosition" data-spm-click="gostr=/hr;locaid=newPositionMore">更多</a>
					</div>
					<ul className="position-list">
						{data.map((item, index) => {
							return (
								<li key={index} className="scroll-5">
									<a href="/zhaopin/PositionDetail.htm?positionCode=GP565031&amp;" title={item.work} className="position">{item.work}</a>
									<em className="time">{item.time}分钟前</em>
									<em className="city">{item.city}</em>
								</li>
							)
						})}
					</ul>
				</div>
			</Fragment>
		)
	}
}

export default newslist
