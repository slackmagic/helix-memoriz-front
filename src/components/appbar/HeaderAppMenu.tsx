import React from "react";
import { useHistory } from "react-router-dom";
import {
	Fade,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from "@material-ui/core";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import LocalDrinkTwoTone from "@material-ui/icons/LocalDrinkTwoTone";
import TrackChangesTwoToneIcon from "@material-ui/icons/TrackChangesTwoTone";
import AppsIcon from "@material-ui/icons/Apps";

export default function HeaderAppMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);
	let history = useHistory();

	const handleHome = () => {
		history.push("/");
	};

	const handleMemoriz = () => {
		history.push("/memoriz");
	};

	const handleGrimoire = () => {
		history.push("/grimoire");
	};

	const handleElixir = () => {
		history.push("/elixir");
	};

	const handleWowTracker = () => {
		history.push("/wowtracker");
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
				<AppsIcon />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={isMenuOpen}
				onClose={handleMenuClose}
				id={"something"}
				TransitionComponent={Fade}
				keepMounted
			>
				<MenuItem onClick={handleHome}>
					<ListItemIcon>
						<HomeTwoToneIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</MenuItem>
				<MenuItem onClick={handleGrimoire}>
					<ListItemIcon>
						<MenuBookTwoToneIcon />
					</ListItemIcon>
					<ListItemText primary="Grimoire" />
				</MenuItem>
				<MenuItem onClick={handleMemoriz}>
					<ListItemIcon>
						<BookmarksTwoToneIcon />
					</ListItemIcon>
					<ListItemText primary="Memoriz" />
				</MenuItem>
				<MenuItem onClick={handleWowTracker}>
					<ListItemIcon>
						<TrackChangesTwoToneIcon />
					</ListItemIcon>
					<ListItemText primary="WowTracker" />
				</MenuItem>
				<MenuItem onClick={handleElixir}>
					<ListItemIcon>
						<LocalDrinkTwoTone />
					</ListItemIcon>
					<ListItemText primary="Elixir" />
				</MenuItem>
			</Menu>
		</>
	);
}
