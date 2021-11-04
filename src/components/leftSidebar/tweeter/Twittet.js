import React from 'react'
import useStyle from './styles';
import { ButtonBase, Grid, Typography } from '@material-ui/core';


function Twittet({ name, id, img }) {
    const classes = useStyle();
    return (
        <ButtonBase className={classes.root}>
            <Grid item container direction="row" alignItems="center" >
                <img src={img} className={classes.personImg} />
                <Grid item container direction="column" className={classes.profInfo} alignItems="center"  >
                    <Typography className={classes.profName}>{name}</Typography>
                    <Typography className={classes.profId}>{id}@</Typography>
                </Grid>
            </Grid>
        </ButtonBase>

    )
}

export default Twittet
