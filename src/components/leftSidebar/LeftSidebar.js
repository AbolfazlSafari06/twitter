import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyle from './styles';
import index from '../../assets/index';
import Twittet from './tweeter/Twittet';

function LeftSidebar() {
    const classes = useStyle()

    return (
        <div className={classes.root} >
            <Grid container direction={"row-reverse"} alignItems="center"   >
                <img src={index.Persons.abolfazlSafari} className={classes.personImg} />
                <Grid item container direction="column" className={classes.profText}>
                    <Typography className={classes.profName}>ابوالفضل صفری</Typography>
                    <Typography className={classes.profId}>abolfazlSafari06</Typography>
                </Grid>
                <div className={classes.fakeDiv}>
                </div>
            </Grid>
            <Grid item container direction="row" className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography> 
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet>
                <Divider style={{ width: "100%" }} />
                <Twittet name={"ابوالفضل صفری"} id={"abolfazlsafari06"} img={index.Persons.abolfazlSafari}></Twittet> 
            </Grid>
        </div >
    )
}

export default LeftSidebar
