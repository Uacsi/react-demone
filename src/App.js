import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login/login';
import Admin from './pages/admin/admin';

// 应用的root组件

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				{/*只匹配其中一个*/}
				<Switch>
					<Route path='/' component={Login}></Route>
					<Route path='/admin' component={Admin}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
};
