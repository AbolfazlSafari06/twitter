import React from 'react'
import { Button, Grid, IconButton } from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

import useStyle from './style';
import index from "../../../assets/index";

function NewTweet() {
    const classes = useStyle();
    return (
        <div className={classes.newTweet}>
            <div className={classes.newTweetInfo}>
                <Grid container>
                    <img src={index.Persons.abolfazlSafari} className={classes.personImg} />
                    <textarea placeholder="توییت کن ..." className={classes.tweetInput} />
                </Grid>
            </div>
            <Grid container direction="row-reverse" >
                <Button variant={"contained"} color={"primary"} className={classes.newTweetButton}>توییت</Button>
                <IconButton className={classes.imgButton}> 
                    <img style={{width:"1.8rem",height:"1.8rem"}} src={index.icons.picIcon} />
                </IconButton> 
            </Grid>
        </div>
    )
}

export default NewTweet
