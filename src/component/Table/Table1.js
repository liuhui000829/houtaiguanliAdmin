import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';
import gets from '@/resource/http.js'
const columns = [
    {
        title: '姓名',
        //dataIndex 列数据在数据项中对应的路径，支持通过数组查询嵌套路径
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="#1">{text}</a>,
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        render: age => {
            let color = age < 40 ? 'blue' : 'red';
            return <Tag key={age} color={color}>{age}</Tag>
        }
    },
    {
        title: '国家',
        dataIndex: 'country',
        key: 'country',

    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '颜色',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'blue' : 'red';
                    if (tag === 'loser') {
                        color = 'yellow';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            // record 可以点击这一行的属性
            <Space size="middle">
                <Button  type="primary">修改 {record.age}</Button>
                <Button  type="danger">删除</Button>
            </Space>
        ),
    },
];
// const data = [
//     {
//         key: '1',
//         name: 'Vue',
//         age: 32,
//         country: 'China',
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Angular',
//         country: 'English',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'React',
//         country: 'England',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     }
// ];

export default class Table1 extends Component {
    state={
        data:[],
        columns
    }
    // delete=()=>{
    //     console.log("123");
    //     console.log(this.state.data);
    // }
    // update=()=>{
    // }
    componentDidMount(){
        gets("/abc/json").then(res=>{
          
            this.setState({
                data:res
            })
        }).catch(err=>{
            console.log(err);
        })
    }
    render() {
        let {data,columns}=this.state;
        return (
            <>
                <Table rowSelection={true} columns={columns} dataSource={data} />
            </>
        )
    }
}
