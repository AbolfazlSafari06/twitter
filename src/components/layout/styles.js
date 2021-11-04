import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    root: {
        display: "flex",
        height: '100vh',
        width: "100%",
        overflow: 'hidden'
    },
    rightSideBar: {
        backgroundColor: '#BDC3C7',
        width: '18%'
    },
    leftSideBar: {
        width: '25%',
        backgroundColor: '#BDC3C7'
    },
    mainPart: {
        flex: 1,
        backgroundColor: '#BDC3C7'
    }


});


export default useStyle;
