import { createMuiTheme } from "@material-ui/core";

/*
main : 252b3d
main lighter: 404868
*/

const mainTheme = createMuiTheme({
	palette: {
		common: { black: "#000", white: "#fff" },
		background: {
			paper: "#fff",
		},
		primary: {
			//GREEN
			light: "#fff",
			main: "#382449",
			dark: "#4d3066",
			contrastText: "#fff",
		},
		secondary: {
			//BLUE
			light: "#4dabf5",
			main: "#000000",
			dark: "#1769aa",
			contrastText: "#fff",
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff",
		},
		text: {
			primary: "#000",
			secondary: "rgba(0, 0, 0, 0.54)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)",
		},
	},
	typography: {
		fontFamily: ["Roboto Condensed", "Roboto", "Roboto Slab"].join(","),
	},
});
export default mainTheme;
