import Status from '../../../language/client/status.js'
import { FETCH_REPORT, FETCH_REPORT_DONE } from '../actions/types.js'

const Pending = (pending = false, action) => {
    switch (action.type) {
        case FETCH_REPORT:
            return Status.LOADING
        case FETCH_REPORT_DONE:
            return false
        default:
            return pending
    }
}

export default Pending
