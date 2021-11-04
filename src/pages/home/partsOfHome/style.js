import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({

    root: {
        padding: 20,
        backgroundColor: "white",
        display: "flex"
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
    newTweetInfo: {
        padding: 18,
        display: "flex",
    },
    newTweet: {
        backgroundColor: "#fff",
        padding: 16
    },
    newTweetButton: {
        color: "#fff",
        borderRadius: "1rem",
        minHeight: 30,
        height: 30,
        lineHeight: "1rem",
        minWidth: "5rem"
    },
    personImg: {
        width: "7.5rem",
        height: "7.5rem",
        borderRadius: "57%"
    },
    tweetInput: {
        border: "none",
        flex: 1,
        outline: "none",
        padding: 7,
        fontSize: "1.5rem",
        marginRight: 20,
    },
    imgButton: { 
        border: "1px solid #3337",
        padding: "0.2rem",
        borderRadius: "50%",
        marginLeft: 16, 
    }
})

export default useStyle;