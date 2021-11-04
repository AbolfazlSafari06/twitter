import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(
    {
        mainPart: {
            flex: 1,
            backgroundColor: '#e6e6e6',
            height:"100vh",
            overflowY:"auto"

        },
        divider: {
            backgroundColor: "#7EBAFF",
            width: "100%",
        }
    })
export default useStyle;