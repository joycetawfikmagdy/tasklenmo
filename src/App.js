import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Router from "./Router";
import Navigator from "./Navigator";

class App extends Component {
	render() {
		return <Navigator />;
	}
}

export default App;
