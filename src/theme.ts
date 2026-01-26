import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Change primary color of MUI
const theme = createTheme({
	palette: {
		primary: {
			main: red[700],
		},
	},
});

export default theme;
