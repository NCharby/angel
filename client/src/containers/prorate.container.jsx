import React, { Fragment } from 'react'

import { 
    Button,
    InputLabel
} from '@material-ui/core'

import { 
    Panel,
    MoneyInput,
    Investor
} from '../components/index.js'

export default function ProrateContainer() {

    return (
        <Fragment>
            <h2>Inputs</h2>
            <Panel>
                <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
                    <MoneyInput 
                        id="allocation" 
                        placeholder="Allocation"
                        label="Total Available Allocation"
                        style={{marginBottom: '32px'}}
                    />
                    <div>
                        <InputLabel shrink={true}>Investor Breakdown</InputLabel>
                        <Investor />
                        <Investor />
                        <Investor />
                        <Button variant="contained" color="primary">Prorate</Button>
                    </div>
                </form>
            </Panel>
        </Fragment>
    )
}