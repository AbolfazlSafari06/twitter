import React, { useEffect, useRef, useState } from 'react'
import { Button, Grid, IconButton } from '@material-ui/core';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

import useStyle from './style';
import index from "../../../assets/index";
import classNames from 'classnames';

function NewTweet() {
    const input = useRef();
    const classes = useStyle();
    const [tweet, setTweet] = useState()

    const renderTweet = (content) => {
        // return { __html: content.replace(/#\S+/g, `<span style='color:#1da1f2,text-style:none'>$&</span>`) };
        return content.replace(/#\S+/g, `<span style='color:#1da1f2,text-style:none'>$&</span>`);
    }

    useEffect(() => {
        input.current.addEventListener("input", function (e) {
            console.log(e.target.innerHtml);
            // setTweet({__html:e.target.value})
            setTweet(renderTweet(e.target.value))
        })
    }, [])


    return (
        <div className={classes.newTweet}>
            <div className={classes.newTweetInfo}>
                <Grid container>
                    <img src={index.Persons.abolfazlSafari} className={classes.personImg} />
                    {/* <div  contentEditable={true} data-placeholder="Edit me"   dangerouslySetInnerHTML={tweet} value={tweet} ref={input}  className={classes.tweetInput} /> */}
                    <textarea  value={tweet} ref={input} className={classes.tweetInput} />
                    {/* <div contentEditable={true} data-placeholder="Edit me"  ClassName={classNames(classNames.tweetInput,"editable")} /> */}
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

export default NewTweet
