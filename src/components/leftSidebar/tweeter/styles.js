import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        padding: "0.8rem 1rem", 
        width:"100%"
    },
    profName: {
        // fontSize: "1.5rem",
        marginBottom: "0.75rem"
    },
    profInfo: {
        justifyContent:"center",
        marginRight:"0.75rem",
        width: "min-content"
    },
    profId: {
        flex: 1,
        fontSize: "0.8rem",
        color: theme.palette.text.hint,
    },
    personImg: {
        width: "5rem",
        height: "5rem",
        borderRadius: "57%"
    },
}));


export default useStyle;
