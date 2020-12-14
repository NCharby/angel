import { makeStyles } from '@material-ui/core/styles'

import {
    Paper 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(4),
        height: 400,
        display: 'flex',
        flexDirection: 'column',
    }
}));

//TODO: Add a storybook
export default function PanelComponent(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.paper} elevation={3} >
            {props.children}
        </Paper>
    )
}