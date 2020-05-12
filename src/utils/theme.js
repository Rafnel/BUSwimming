import { createMuiTheme } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

export const PRIMARY = "#003015";
export const SECONDARY = "#CCA442";
export const ICONS = grey[50];

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: PRIMARY
        },
        secondary: {
            main: SECONDARY
        },
        info: {
            main: ICONS
        },
        red: {
            main: "#eb4034"
        },
        textPrimary: {
            
        }
    }
});

//red theme for red buttons and things
export const redTheme = createMuiTheme({ 
    palette: { 
        primary: {
             main: red[600]
        } 
    }
});