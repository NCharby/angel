import React from 'react'

import {
    Container,
    Grid
} from '@material-ui/core';

import {
    Prorate,
    Results
} from './containers/index.js'

function App() {
    return (
        <Container className="App" maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Prorate />
                </Grid>
                <Grid item xs={4}>
                    <Results />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
