import React, { Component } from 'react'
import { Table, Tag, Space } from 'antd';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default class pull extends Component {
    render() {
        return (
            <div>
                <Table dataSource={data}>
                    <Table.Column dataIndex='name'></Table.Column>
                    <Table.Column dataIndex='age'></Table.Column>
                    <Table.Column dataIndex='address'></Table.Column>
                </Table>

            </div>
        )
    }
}

