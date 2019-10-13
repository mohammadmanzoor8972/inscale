import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        padding:'10px',
        margin:'50px'
    },
  
    Active: {
        color:'green'
    },
    inActive: {
        color:'red'
    },

    label:{
        position:"relative",
        top:"-7px"
    }

}))
