import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { Divider, Typography } from '@material-ui/core';

import useStyle from './style';

function Header({title,icon}) {
    const classes = useStyle()
    return (
        <>
            <div className={classes.root}>
                {icon} 
                <Typography className={classes.headerTitle}>
                    {title}
                </Typography>
            </div>
            <Divider className={classes.divider} /> 
        </>
    )
}

export default Header;
