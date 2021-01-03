import React, { Component } from 'react'

import { Menu, Button } from 'antd';
import menuList from '@/util/menuConfig'
import { NavLink } from 'react-router-dom'

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
   
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class LeftNav extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    //循环所有的路由
    show = (menuList) => {
        return menuList.map((val, index) => {
            if (val.children) {
                return (
                    <SubMenu
                        title={val.title}
                        key={val.key}
                        icon={<AppstoreOutlined />}
                    >
                        {this.show(val.children)}
                    </SubMenu>
                )
            }
            else {
                return (
                    <Menu.Item
                        key={val.key}
                        icon={<MenuFoldOutlined />}
                    >
                        <NavLink to={val.key}>{val.title}</NavLink>
                    </Menu.Item>
                )
            }
        })
    }

    render() {
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.show(menuList)}


                </Menu>
            </div>
        );
    }
}


