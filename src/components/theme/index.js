import { createMuiTheme } from '@material-ui/core/styles';

const colorPrimary = "#1da1f2 !important";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Shabnam', 
    },
    palette: {
        primary: {
            main:colorPrimary
        },
    },
});
export default theme;