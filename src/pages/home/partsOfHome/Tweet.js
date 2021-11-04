import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import React from 'react';

import index from "../../../assets/index";
import useStyle from './style';

function Tweet() {
    const classes = useStyle();
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
                        <Typography>
                            lorem loresdgfbibdidsbilorem loresdgfbibdidsbilorem loresdgfbibdidsbilorem loresdgfbibdidsbilorem loresdgfbibdidsbi
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <Grid container direction="row-reverse" >
                <Button variant={"contained"} color={"primary"} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.imgButton}>
                    <img style={{ width: "1.8rem", height: "1.8rem" }} src={index.icons.picIcon} />
                </IconButton>
            </Grid>
        </div>
    )
}

export default Tweet