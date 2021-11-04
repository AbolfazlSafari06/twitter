import { Divider, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import useStyle from './styles';
import RightSidebar from './../rightSidebar/RightSidebar';
import LeftSidebar from './../leftSidebar/LeftSidebar';
import Home from '../../pages/home/Home';

function Layout() {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <RightSidebar />
            <Divider orientation={"verticla"} className={classes.divider} />
            <Home /> 
            <Divider orientation={"verticla"} className={classes.divider} />
            <LeftSidebar />
        </div>
    )
}

export default Layout
