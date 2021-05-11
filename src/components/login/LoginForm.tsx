import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	CardContent,
	TextField,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "helix-shared-ui-lib";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(6, 0, 0, 0),
		color: "white",
	},
	card: {
		backgroundColor: "rgba(255, 255, 255, .5)",
		//
	},
	header: {
		backgroundColor: "rgba(200, 0, 200, .5)",
		padding: theme.spacing(2),
		color: "white",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function LoginForm() {
	const { authenticate } = useAuth();
	const classes = useStyles();
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		setIsButtonDisabled(
			login.trim().length === 0 || password.trim().length === 0
		);
	}, [login, password]);

	const handleLogin = () => {
		authenticate({ login, password });
	};

	const handleKeyPress = (e: React.KeyboardEvent<any>) => {
		if (e.keyCode === 13 || e.which === 13) {
			isButtonDisabled || handleLogin();
		}
	};

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<div className={classes.header}>
					<Typography variant="h5" component="h2">
						Se connecter
					</Typography>
				</div>
				<CardContent>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="login"
							label="Login"
							name="login"
							autoComplete="login"
							autoFocus
							onChange={(e) => setLogin(e.target.value)}
							onKeyPress={(e) => handleKeyPress(e)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Mot de passe"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={(e) => setPassword(e.target.value)}
							onKeyPress={(e) => handleKeyPress(e)}
						/>
						<Button
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							disabled={isButtonDisabled}
							onClick={() => handleLogin()}
						>
							Se connecter
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
