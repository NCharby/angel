import React, { Fragment } from 'react'

import {
    Panel
} from '../components/index.js'

export default function ResultsContainer(props) {
    const { resultsState } = props

    const hasResults = function(){
        return Object.keys(resultsState).length
    }


    return (
        <Fragment>
            <h2>Results</h2>
            <Panel>
                { hasResults() ? (
                    <ul>
                        {Object.keys(resultsState).map((key, i) =>(
                            <li key={`result-${i}`}>{key}: {resultsState[key]}</li>
                        ))}
                    </ul>
                ): (
                    <span>Waiting for data</span>
                )}
            </Panel>
        </Fragment>
    )
}