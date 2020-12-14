import {
    TextField,
    InputAdornment
} from '@material-ui/core'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

//TODO: Needs validation
export default function MoneyInputComponent(props) {

    return (
        <TextField
            {...props}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AttachMoneyIcon />
                    </InputAdornment>
                ),
            }}
        />
    )
}