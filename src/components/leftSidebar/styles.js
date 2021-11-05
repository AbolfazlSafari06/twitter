import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        width: '25%',
        backgroundColor: '#fff',
        padding: "1.7rem 1rem"
    },

    personImg: {
        width: "7.5rem",
        height: "7.5rem",
        borderRadius: "57%"
    },
    fakeDiv: {
        flex: 1,
        width: "max-content"
    },
    profText: {
        marginLeft: "0.5rem",
        width: "max-content",
        direction: "rtl"
    },
    profName: {
        // fontSize: "1.5rem",
        marginBottom: "0.75rem"
    },
    profId: {
        flex: 1,
        fontSize: "0.8rem",
        color: theme.palette.text.hint,
    },
    tweeterRoot: {
        backgroundColor: "#f5f8fa",
        height: "33rem",
        overflowY: "scroll",
        marginTop: "3rem",
        borderRadius: "2.5rem",
        "&::-webkit-scrollbar": {
            width: 8,
            height: "max-content",
            marginLeft: 4,
            padding: 20,
            borderRadius: "20px",
        },

        "&::-webkit-scrollbar-track ": {
            background: "#d7dadc",
            marginLeft: 4,
            padding: 20,
            borderRadius: "20px",
        },

        "&::-webkit-scrollbar-thumb ": {
            background: "#d7dadc",
            borderRadius: "20px",
            border: "3px solid  #0f0f0f"
        }
    },
    tweeterTitle: {
        fontSize: "1.1rem",
        fontWeight: "600",
        padding: "11px 24px",
    }
}));


export default useStyle;
