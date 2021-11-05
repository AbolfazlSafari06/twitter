import React from 'react'
import { Divider } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

import useStyle from './style';
import NewTweet from './partsOfHome/NewTweet'
import TweetList from './partsOfHome/TweetList';
import Header from './../../components/header/Header';


function Home() {
    const classes = useStyle()
    return (
        <div className={classes.mainPart}>
            <Header title={"خانه"} icon={<HomeIcon />} />
            <Divider className={classes.divider} />
            <NewTweet />
            <TweetList />
        </div>
    )
}

export default Home
