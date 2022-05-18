import React, { Component } from 'react'
import { Tabs, Button, Cell, Dialog } from 'react-vant';
import One from './one'
import Two from './two'
import Three from './three'

const list = [
    {
        name: '1',
        id: 1,
        component: One
    },
    {
        name: '2',
        id: 2,
        component: Two
    },
    {
        name: '3',
        id: 3,
        component: Three
    }
]

export default class Vant extends Component {
    render() {
        return (
            <div className='tab'>
                <div className="demo-tabs">
                    <Tabs sticky scrollspy={{ autoFocusLast: true, reachBottomThreshold: 50 }}>
                        {list.map((item) => (
                            <Tabs.TabPane key={item.id} title={`标签${item.name}`}>
                                <item.component />
                            </Tabs.TabPane>
                        ))}
                    </Tabs>
                </div>

                <Button square type="primary">
                    方形按钮
                </Button>
            </div>
        )
    }
    tabClick = (name, title, event, disabled) => {
        console.log(name, title, event, disabled)
    }
}
