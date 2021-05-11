import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderAppMenu from "./HeaderAppMenu";
import HeaderAppMenuUser from "./HeaderAppMenuUser";
import { useAuth } from "helix-shared-ui-lib";

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "rgba(0, 0, 0, .4)",
		zIndex: theme.zIndex.drawer + 1,
	},
	logo: {
		height: "32px",
		marginRight: theme.spacing(1),
	},
	bottomBar: {
		background:
			"linear-gradient(90deg, rgba(183, 63, 255, .5) 0%, rgba(255, 60, 172, .5)  100%)",
		minHeight: "4px",
		maxWidth: "100%",
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function HeaderAppBar() {
	const { isAuthenticated } = useAuth();
	const classes = useStyles();

	return (
		<>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<img className={classes.logo} src="helix-logo.svg" alt="logo"></img>
					<Typography variant="h6" className={classes.title}>
						HELIX
					</Typography>
					<HeaderAppMenu />
					{isAuthenticated ? <HeaderAppMenuUser /> : <></>}
				</Toolbar>
				<div className={classes.bottomBar}></div>
			</AppBar>
		</>
	);
}
