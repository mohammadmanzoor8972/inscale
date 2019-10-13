import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        padding:'10px',
        margin:'50px'
    },
    header: {
        backgroundColor:'grey'
    },
    table: {
        width:'100%'
    },
    datanotfound: {
        textAlign:"center",
        width:"100%"
    }
}))