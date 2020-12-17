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

export default function ProrateContainer(props) {
    const { 
        onSubmit, 
        alloAmount, 
        setAlloAmount,
        formState,
        setFormState } = props

    const handleStateChange = function(id, type, value){
        const locState = [...formState]
        locState[id][type] = value
        setFormState(locState)
    }

    return (
        <Fragment>
            <h2>Inputs</h2>
            <Panel>
                <div
                    style={{display: 'flex', flexDirection: 'column'}}>
                    <MoneyInput
                        value={alloAmount}
                        onChange={evt => setAlloAmount(evt.target.value)}
                        id="allocation"
                        placeholder="Allocation"
                        label="Total Available Allocation"
                        style={{marginBottom: '32px'}}
                    />
                    <div>
                        <InputLabel shrink={true}>Investor Breakdown</InputLabel>
                        <Investor 
                            formState={formState}
                            handleStateChange={handleStateChange}
                            idPrefix="0"/>
                        <Investor 
                            formState={formState}
                            handleStateChange={handleStateChange}
                            idPrefix="1"/>
                        <Investor 
                            formState={formState}
                            handleStateChange={handleStateChange}
                            idPrefix="2"/>
                        <Button variant="contained" color="primary" onClick={onSubmit}>Prorate</Button>
                    </div>
                </div>
            </Panel>
        </Fragment>
    )
}