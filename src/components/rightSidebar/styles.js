import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        width: "18%",
        padding: "1.5rem 1rem",
    },
    logo: {
        width: 43,
        height: 43
    },
    logType: {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginRight: "1rem",
        marginLeft: "1rem",
        color: theme.palette.primary.main
    },
    hashtagTitle: {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginRight: "1rem",
        marginLeft: "1rem",
        marginTop: "3rem",
        marginBottom: "1rem",
    },
    hashtag: {
        marginRight: "1rem"
    },
    hastagPareny: {
        width: "100%",
        marginTop: "0.25rem",
        padding: "0.25rem",
    }
}));


export default useStyle;
