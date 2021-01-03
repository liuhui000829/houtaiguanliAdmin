import React, { Component } from 'react'
import Home from '../Page/Home/Home'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'

import Table1 from '@/component/Table/Table1'
import Form from '@/component/Form/Form'

export default class Router extends Component {
    render() {
        return (
            <div>
                <Routers>
                    <Route path="/">
                        <Home>
                            <Switch>
                                <Route exact path="/" component={() => <h1>欢迎你:奋斗者</h1>} />
                                <Route path="/admin/home" component={() => <h1>欢迎你:奋斗者</h1>}/>
                                <Route path="/admin/table/basic" component={Table1}/>
                                <Route path="/admin/ui/from" component={Form}/>
                            </Switch>
                        </Home>
                    </Route>
                </Routers>
            </div>
        )
    }
}
