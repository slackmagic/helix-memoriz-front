import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./index.css";
import App from "./pages/app/App";

import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "helix-shared-ui-lib";

ReactDOM.render(
	<AuthProvider>
		<React.StrictMode>
			<Router history={createBrowserHistory()}>
				<Route exact path="/memoriz" component={App} />
			</Router>
		</React.StrictMode>
	</AuthProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
