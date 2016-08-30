import React from 'react'
import { connect as Connect } from 'react-redux'
import { GenerateReportAction } from '../../actions/creators.js'
import DisplayContent from '../presentational/DisplayContent.js'

const GetContent = (content) => {
    if (content instanceof Error) {
        return content.stack || content
    }
    return content
}

const MapStateToProps = ({ report, pending }, ownProps) => {
    return {
        content: (pending ? pending : GetContent(report))
    }
}

const DisplayReport = Connect(MapStateToProps)(DisplayContent)

export default DisplayReport
export { DisplayReport, GetContent, MapStateToProps }
