import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';

import index from "../../../assets/index";
import useStyle from './style';

function Tweet() {
    const classes = useStyle();


    const renderTweet = (content) => {
        return { __html: content.replace(/#\S+/g, `<a href="/tags/$&" style='color:#1da1f2,text-style:none'>$&</a>`) };
    }
    return (
        <div className={classes.tweetItem}>
            <div className={classes.newTweetInfo}>
                <Grid container alignItems="center">
                    <img src={index.Persons.abolfazlSafari} className={classes.personImg} />
                    <Grid item container direction={"column"} className={classes.tweetitemContent} >
                        <Grid item container alignItems="center" className={classes.TweetItemInfo}>
                            <Typography className={classes.TweetItemName} >
                                ابولفضل صفری
                            </Typography>
                            <Typography className={classes.TweetItemId}>
                                @abolfazlSafari06
                            </Typography>
                        </Grid>
                        <Typography dangerouslySetInnerHTML={renderTweet("  #برنامه_نویسی دانش جذابی هست.ها ها #افض ها ها ها ها  ")} component={"p"} >
                            {

                            }
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container direction="row-reverse" alignItems="center">
                <IconButton className={classes.imgButton}>
                    <img style={{ width: "1.8rem", height: "1.8rem" }} src={index.icons.reTweet} />
                </IconButton>
                <IconButton className={classes.imgButton}>
                    <FavoriteIcon style={{ color: "red", width: "1.8rem", height: "1.8rem" }} />
                </IconButton>
                <Typography className={classes.likeCount}>
                    16
                </Typography>
            </Grid>
        </div>
    )
}

export default Tweet