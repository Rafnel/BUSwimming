import { createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

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
        }
    }
});