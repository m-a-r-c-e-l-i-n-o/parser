import Errors from '../language/node/errors.js'
import Parser from './parser/index.js'
// import Validator from './validator/index.js'

const GenerateReport = (format, recordString) => {
    if (format === 'CHARACTER_FORMAT') {
        if (!recordString ||
            typeof recordString !== 'string' ||
            recordString.length !== 852) {
            throw new Error(Errors.INVALID_RECORD_STRING)
        }
        const record = {}
        const headerID = 'HEADER_RECORD'
        const baseSegmentID = 'BASE_SEGMENT_RECORD'
        const headerString = recordString.slice(0, 426)
        const baseSegmentString = recordString.slice(426)

        const parsedHeader = Parser(format, headerID)
        record[headerID] = parsedHeader(headerString)

        const parseBaseSegment = Parser(format, baseSegmentID)
        record[baseSegmentID] = parseBaseSegment(baseSegmentString)

        // Validator would go here...
        // Validator(format, headerID, record[headerID])
        // Validator(
        //  format, baseSegmentID, record[baseSegmentID], record[headerID]
        //)

        return record
    }

    throw new Error(Errors.UNSUPPORTED_FORMAT)
}

export default GenerateReport
