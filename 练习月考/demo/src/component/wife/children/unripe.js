import React, { useEffect, useState } from 'react'
import pubsub from 'pubsub-js'
import axios from '../../../utils/reqson'
import AddLeft from './AddLeft';
import { connect } from 'react-redux'

import { asyncAction } from '../../../redux/action';
// ---------------------------------------------------
import { Table, Input, Button, Alert } from 'tdesign-react';
import { concat } from 'lodash';

const columns = [
    {
        width: 260,
        colKey: 'name',
        title: 'UNKNOWN_USER',
    },
    {
        width: 260,
        colKey: 'sex',
        title: '性别',
    },
    {
        width: 260,
        colKey: 'id',
        title: '联系方式',
    },
    {
        width: 260,
        colKey: 'city',
        title: '城市',
    },
    {
        width: 260,
        colKey: 'title',
        title: '邮箱',
        ellipsis: true,
    },
    {
        width: 260,
        colKey: {},
        title: "操作",
        cell() {
            return (
                <>
                    <span className='compile'>
                        管理
                    </span>
                    <span className='del'>
                        删除
                    </span>
                </>
            );
        },
    }
];
// -----------------------------------------------------------

function Unripe(props) {
    const [isLoading, setIsLoading] = useState(false);
    // 数据
    const [data, setData] = useState([]);
    // 数据条数
    const [total, setTotal] = useState(100);
    // 第几页
    const [current, setCurrent] = useState(1);
    // 每页多少条数据
    const [pageSize, setPageSize] = useState(10);
    //inp内容
    const [iptChange, setIptChange] = useState('')
    // 添加的显示state
    const [visible, setVisible] = useState(false);
    // 成功弹窗的状态
    const [sureAlert, setSureAlert] = useState(false)
    // 添加or编辑状态
    const [AddNum, setAddNum] = useState('')
    console.log(props)
    // 分页数据变化
    async function rehandleChange(pageInfo) {
        console.log(pageInfo)
        const { current, pageSize } = pageInfo;
        setCurrent(current);
        setPageSize(pageSize);
        await fetchData(pageInfo);
    }
    // 模拟远程请求
    async function fetchData(pageInfo) {
        setIsLoading(true);
        const { current, pageSize } = pageInfo;
        if (data.length === 99) {
            await axios.post('/api/data', {
                current: current,
                pageSize: pageSize
            }).then(res => {
                setData(res.data)
                setTotal(res.total);
                setIsLoading(false);
            })
        } else {
            await axios.post('/api/data', {
                current: current,
                pageSize: pageSize,
                ipt: iptChange
            }).then(res => {
                setData(res.data)
                setTotal(res.total);
                setIsLoading(false);
            })
        }
    }
    // 渲染
    useEffect(() => {
        fetchData({ current, pageSize })
    }, []);
    // 确定搜索
    const sure = () => {
        axios.post('/api/data', {
            current: 1,
            pageSize: pageSize,
            ipt: iptChange
        }).then(res => {
            setData(res.data)
            setTotal(res.total);
            setIsLoading(false);
        })
    }
    // 点击添加显示弹框
    const handleClick = () => {
        setAddNum(1)
        setVisible(true);
        props.asyncMethods(asyncAction())
    };
    // 点击添加的取消按钮(传出去)
    const handleClose = () => {
        setVisible(false);
    };
    //点击添加的确认按钮(传出去)
    const onConfirm = (value) => {
        const { name, sex, city, title, id } = value
        if (name !== "" && sex !== "" && city !== "" && title !== "") {
            axios.post('/api/add', {
                current: current,
                pageSize: pageSize,
                value: value
            }).then(res => {
                setData(res.data)
                setTotal(res.total);
                setIsLoading(false);
                setVisible(false);
                setSureAlert(true)
                setTimeout(() => {
                    setSureAlert(false)
                }, 3000);
            })
        }
    }
    // 点击编辑里面的取消按钮
    const compileClose = () => {
        setVisible(false);
    }
    // 点击编辑里面的确定按钮
    const sureConfirm = (value) => {
        const { name, sex, city, title, id } = value
        if (name !== "" && sex !== "" && city !== "" && title !== "" && id !== "") {
            console.log(111)
            axios.post('/api/concat', {
                current: current,
                pageSize: pageSize,
                id: value
            }).then(res => {
                setData(res.data)
                setTotal(res.total);
                setVisible(false);
                setSureAlert(true)
                setTimeout(() => {
                    setSureAlert(false)
                }, 3000);
            })
        }
    }

    return (
        <>
            {/* 这是成功的弹窗 */}
            {sureAlert && <Alert theme="success" message="这是一条成功的消息提示" />}
            {/* 这是搜索栏 */}
            <div className='search'>
                <Input
                    placeholder="请输入内容（无默认值）"
                    style={{ width: '94%' }}
                    onChange={(value) => {
                        setIptChange(value)
                    }}
                />
                <Button
                    shape="rectangle"
                    size="medium"
                    type="button"
                    variant="base"
                    onClick={sure}
                >
                    搜索
                </Button>
                {/* 添加按钮的组件 */}
                <Button variant="outline" theme="success" ghost onClick={handleClick}>
                    添加
                </Button>
                {
                    AddNum === 1
                        ? <AddLeft handleClose={handleClose} visible={visible} onConfirm={onConfirm} />
                        : <AddLeft compileClose={compileClose} visible={visible} sureConfirm={sureConfirm} />
                }
            </div>
            <Table
                data={data}
                columns={columns}
                rowKey="phone"
                loading={isLoading}
                pagination={{
                    current,
                    pageSize,
                    // 支持非受控用法
                    // defaultCurrent: 1,
                    // defaultPageSize: 5,
                    total,
                    showJumper: true,
                    onChange(pageInfo, context) {
                        rehandleChange(pageInfo, context);
                    },
                }}
                onPageChange={(pageInfo) => {
                    console.log(pageInfo, '分页发生变化时触发');
                }}
                onCellClick={
                    (pageInfo, context) => {
                        console.log(pageInfo)
                        if (pageInfo.col.title === '操作' && pageInfo.e.target.className === "compile") {
                            const id = data.find(item => {
                                return item.id === pageInfo.row.id
                            })
                            pubsub.publish('send', {
                                id: id
                            })
                            setAddNum(2)
                            setVisible(true);
                        }
                        if (pageInfo.col.title === '操作' && pageInfo.e.target.className === "del") {
                            const id = data.find(item => {
                                return item.id === pageInfo.row.id
                            })
                            console.log(id.id)
                            axios.post('/api/del', {
                                current: current,
                                pageSize: pageSize,
                                data: data,
                                id: id.id
                            }).then(res => {
                                setData(res.data)
                                setTotal(res.total);
                            })
                        }
                    }}
            />
        </>
    );
}
const mapStateToProps = (state, ownProps) => {
    return {
        title: state.title
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        asyncMethods: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Unripe)