import React from "react";
import {
	Fade,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from "helix-shared-ui-lib";

export default function HeaderAppMenuUser() {
	const { user, logout } = useAuth();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);
	const handleLogout = () => {
		logout();
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				color="inherit"
				onClick={handleMenuOpen}
			>
				<AccountCircleIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={isMenuOpen}
				onClose={handleMenuClose}
				TransitionComponent={Fade}
				keepMounted
			>
				<MenuItem>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary={user?.name} />
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<ListItemIcon>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText primary="Se déconnecter" />
				</MenuItem>
			</Menu>
		</>
	);
}
