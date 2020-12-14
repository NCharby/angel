import React, { Fragment } from 'react'

// import {
//     Paper
// } from '@material-ui/core'


import {
    Panel
} from '../components/index.js'

export default function ResultsContainer(props) {
    const { investors } = props
    return (
        <Fragment>
            <h2>Results</h2>
            <Panel>
                { investors ? (
                    <span>items</span>
                ): (
                    <span>Waiting for data</span>
                )}
            </Panel>
        </Fragment>
    )
}