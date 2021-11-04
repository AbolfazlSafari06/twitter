import { ButtonBase, Grid, Typography } from '@material-ui/core'
import React from 'react'
import logos from '../../assets/index';
import useStyle from './styles';

function RightSidebar() {

    const hashtags = ["مرگ_برآمریکا", "رییسی", "ترور_حسن_روحانی", "بارسلونا", "سامسونگ", "قاسم_سلمانی",]


    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container direction="row" alignItems="center" justifyContent="center">
                <Grid item>
                    <img src={logos.logos.twitterLogo} className={classes.logo} />
                </Grid>
                <Grid item>
                    <Typography component="h1" className={classes.logType}>
                        تویتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashtagTitle} >
                داغ ترین هشتگ ها
            </Typography>
            <Grid direction="column" container  >
                {
                    hashtags.map(h => {
                        return (
                            <ButtonBase className={classes.hastagPareny} >
                                <Grid item container alignItems="center"  >
                                    <img src={logos.logos.hashtag} className={classes.logo} />
                                    <Typography className={classes.hashtag}>
                                        {h}
                                    </Typography>
                                </Grid>
                            </ButtonBase>
                        )
                    })
                }

            </Grid>
        </div>
    )
}

export default RightSidebar
