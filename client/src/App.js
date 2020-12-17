import React, { useState, useCallback } from 'react'

import {
    Container,
    Grid
} from '@material-ui/core';

import {
    Prorate,
    Results
} from './containers/index.js'

function App() {
    const [ isRequesting, setRequesting ] = useState(false)
    //this is gross. use a state manager for data
    const [ formState, setFormState ] = useState([{},{},{}])
    const [ alloAmount, setAlloAmount ] = useState(0)

    const sendRequest = useCallback( async () => {
        if(isRequesting) return
        setRequesting(true)
        console.log('REQUEST')

        setRequesting(false)
    }, [isRequesting])

    return (
        <Container className="App" maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Prorate 
                        alloAmount={alloAmount}
                        setAlloAmount={setAlloAmount}
                        onSubmit={sendRequest}
                        formState={formState}
                        setFormState={setFormState}/>
                </Grid>
                <Grid item xs={4}>
                    <Results />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
