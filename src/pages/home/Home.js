import React from 'react'
import { Divider } from '@material-ui/core';

import useStyle from './style';
import Header from './partsOfHome/Header'
import NewTweet from './partsOfHome/NewTweet'


function Home() {
    const classes = useStyle()
    return (
        <div className={classes.mainPart}>
            <Header />
            <Divider className={classes.divider} />
            <NewTweet />
        </div>
    )
}

export default Home
