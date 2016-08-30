import React from 'react'
import { connect as Connect } from 'react-redux'
import { GenerateReportAction, DisplayReportAction } from '../../actions/creators.js'
import SampleReport from '../../../../samples/character-format/physical-record.js'

let GenerateReport = ({ dispatch }) => {
    let input
    return (
        <form id="generate-report-component" onSubmit={e => {
                e.preventDefault()
                dispatch(GenerateReportAction(input.value))
                .then(content => dispatch(DisplayReportAction(content)))
                .catch(e => console.error(e))
            }}>
            <label htmlFor="generate-report-component-example-message-label">
                Raw Report:
            </label>
            <textarea
                id="generate-report-component-example-message-label"
                className="report u-full-width"
                ref={node => { input = node }}
                placeholder="Report here..."
                defaultValue={SampleReport}
            >
            </textarea>
            <div className="submit-button-container">
                <input
                    className="button-primary"
                    type="submit"
                    defaultValue="Generate Report"
                />
            </div>
        </form>
    )
}

GenerateReport = Connect()(GenerateReport)
export default GenerateReport
