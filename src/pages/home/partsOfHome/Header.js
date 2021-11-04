import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { Divider, Typography } from '@material-ui/core';

import useStyle from './style';

function Header() {
    const classes = useStyle()
    return (
        <>
            <div className={classes.root}>
                <HomeIcon />
                <Typography className={classes.headerTitle}>
                    خانه
                </Typography>
            </div>
            <Divider className={classes.divider} /> 
        </>
    )
}

export default Header
