import Errors from '../../../language/client/errors.js'
import ActionTypes from '../actions/types.js'

const GetFetch = () => fetch

const FetchReportAction = () => {
    return { type: ActionTypes.FETCH_REPORT }
}

const FetchReportDoneAction = () => {
    return { type: ActionTypes.FETCH_REPORT_DONE }
}

const DisplayReportAction = (content) => {
    return {
        type: ActionTypes.DISPLAY_REPORT,
        content
    }
}

const GenerateReportAction = (rawReport) => {
    if (!rawReport.trim()) {
        return () => Promise.resolve(Errors.INVALID_REPORT)
    }
    return (dispatch) => {
        dispatch(FetchReportAction())
        const fetch = GetFetch()
        return fetch('generate-report', {
            method: 'POST',
            body: JSON.stringify({
                type: 'CHARACTER_FORMAT',
                content: rawReport
            })
        })
        .then(response => {
            dispatch(FetchReportDoneAction())
            if (response.status !== 200) {
                return Errors.SERVER_ERROR
            }
            return response.json(null, '\t')
        })
        .catch(error => {
            dispatch(FetchReportDoneAction())
            return error
        })
    }
}

export {
    GenerateReportAction,
    FetchReportAction,
    FetchReportDoneAction,
    DisplayReportAction,
    GetFetch
}
