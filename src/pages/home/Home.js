import React from 'react'
import { Divider } from '@material-ui/core';

import useStyle from './style';
import Header from './partsOfHome/Header'
import NewTweet from './partsOfHome/NewTweet'
import TweetList from './partsOfHome/TweetList';


function Home() {
    const classes = useStyle()
    return (
        <div className={classes.mainPart}>
            <Header />
            <Divider className={classes.divider} />
            <NewTweet />
            <TweetList />
        </div>
    )
}

export default Home
