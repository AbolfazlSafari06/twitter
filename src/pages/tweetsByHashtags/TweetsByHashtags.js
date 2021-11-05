import React from 'react'
import useStyle from './style';
import { Divider } from '@material-ui/core';
import TweetList from './../home/partsOfHome/TweetList';
import Header from '../../components/header/Header';
import index from '../../assets/index';

function TweetsByHashtags() {

    const classes = useStyle()

    return (
        <div className={classes.mainPart}>
            <Header title={"کرونا ویروس"} icon={<img src={index.logos.hashtag} style={{ width: 43, height: 43 }} />} />
            <Divider className={classes.divider} />
            <TweetList />
        </div>
    )
}

export default TweetsByHashtags
