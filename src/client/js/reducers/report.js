import Status from '../../../language/client/status.js'
import { DISPLAY_REPORT } from '../actions/types.js'

const Report = (report = Status.WAITING_TO_GENERATE_REPORT, { type, content}) => {
    switch (type) {
        case DISPLAY_REPORT:
            return content
        default:
            return report
    }
}

export default Report
