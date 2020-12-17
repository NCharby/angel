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
    const { 
        idPrefix,
        formState,
        handleStateChange } = props

    //I like to use a graph. Getting the value out of the state
    // would be much cleaner using a proper object query 
    const getState = function(type, isNum = false) {
        return formState[idPrefix][type] || ""
    }

    return (
        <div className={classes.wrapper}>
            <TextField
                value={getState("name")}
                onChange={evt => handleStateChange(idPrefix, 'name', evt.target.value)}
                id={`investor-${idPrefix}-name`}
                placeholder="Name"/>
            <MoneyInput
                value={getState("requested_amount")}
                onChange={evt => handleStateChange(idPrefix, 'requested_amount', evt.target.value)}
                id={`investor-${idPrefix}-requested`}
                placeholder="Requested Amount"/>
            <MoneyInput
                value={getState("average_amount")}
                onChange={evt => handleStateChange(idPrefix, 'average_amount', evt.target.value)}
                id={`investor-${idPrefix}-average`}
                placeholder="Average Amount"/>
        </div>
    )
}