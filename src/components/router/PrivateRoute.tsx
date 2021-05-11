import * as React from "react";
import { LOGIN_URL } from "../../constants";
import { Redirect, Route, RouteProps } from "react-router";
import { useAuth } from "helix-shared-ui-lib";

interface PrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { isAuthenticated } = useAuth();
	const { component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(routeProps) =>
				isAuthenticated ? (
					<Component {...routeProps} />
				) : (
					<Redirect
						to={{
							pathname: LOGIN_URL,
							state: { from: routeProps.location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
