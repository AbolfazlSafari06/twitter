import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
        height: '100vh',
        width: "100%",
    },
    leftSideBar: {
        width: '25%',
        backgroundColor: '#fff'
    },
    divider: {
        width: 3,
        backgroundColor: theme.palette.primary.main,
        height: "100%",
        filter: "opacity(0.5)"

    }



}));


export default useStyle;
