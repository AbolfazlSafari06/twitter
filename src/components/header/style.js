import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({

    root: {
        padding: 20,
        backgroundColor: "white",
        display: "flex",
        alignItems:"center"
    },
    headerTitle: {
        fontWeight: 600,
        fontSize: "1.2rem",
        marginRight: "0.5rem"
    },
    divider: {
        backgroundColor: "#7EBAFF",
        width: "100%",
    },
}))

export default useStyle;