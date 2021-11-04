import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import useStyle from './styles';

function Layout() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <div className={classes.rightSideBar}>
                <Typography component="h1">
                    منوی راست
                </Typography>

            </div>
            <div className={classes.mainPart}>
                بدنه اصلی
            </div>
            <div className={classes.leftSideBar}>
                منوی چپ
            </div>
        </div>
    )
}

export default Layout
