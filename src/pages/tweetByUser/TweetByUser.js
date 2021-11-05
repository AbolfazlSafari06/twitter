import PersonIcon from '@material-ui/icons/Person';
import { Divider } from '@material-ui/core';
import React from 'react';

import TweetList from '../home/partsOfHome/TweetList';
import Header from '../../components/header/Header';
import index from '../../assets/index';
import useStyle from './style';
function TweetByUser() {

    const classes = useStyle()

    return (
        <div className={classes.mainPart}>
            <Header title={" ابوالفضل صفری"} icon={<PersonIcon/>} />
            <Divider className={classes.divider} />
            <TweetList />
        </div>
    )
}

export default TweetByUser
