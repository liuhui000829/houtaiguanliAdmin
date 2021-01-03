import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './Home.scss'
// 下面这个样式必须引入
import 'antd/dist/antd.css';


import LeftNav from '../LeftNav/LeftNav'

export default class Home extends Component {
    render() {
        return (
            <div className="home">

                <Row className="header">
                    <Col span={24}>
                        后台管理系统
                    </Col>
                </Row>

                <Row className="content">
                    <Col span={3} className='left'>
                        <LeftNav/>
                    </Col>

                    <Col span={21} className="right">
                        {this.props.children}
                    </Col>
                   
                </Row>
            </div>
        )
    }
}
