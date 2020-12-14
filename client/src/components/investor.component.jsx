import { makeStyles } from '@material-ui/core/styles'

import {
    TextField
} from '@material-ui/core'

import {
    MoneyInput
} from './index.js'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(4),
        height: 400,
        display: 'flex',
        flexDirection: 'column',
    }
}));

export default function InvestorComponent(props) {
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <TextField
                id=""
                placeholder="Name"/>
            <MoneyInput
                id=""
                placeholder="Requested Amount"/>
            <MoneyInput
                id=""
                placeholder="Requested Amount"/>
        </div>
    )
}