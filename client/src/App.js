import React, { useState, useCallback } from 'react'
import axios from 'axios'


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
    const [ resultsState, setResultsState ] = useState({})
    const [ alloAmount, setAlloAmount ] = useState(0)
    
    const sendRequest = useCallback( async () => {
        console.log(alloAmount)
        if(isRequesting) return
        const locState = [...formState] //being safe
        //90% sure [].filter returns a new array, but I'm not here to get clever
        const cleanState = locState.filter(value => Object.keys(value).length !== 0)
        if(!cleanState.length) return //bail if empty
        setRequesting(true) //prevent double sends
        //TODO: make an api wrapper
        const r = await axios.post('http://localhost:3001/api/allo', {
            'allocation_amount': alloAmount,
            'investor_amounts': cleanState
        })
        setRequesting(false) //ok, you can post again
    }, [isRequesting, alloAmount, formState])

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
