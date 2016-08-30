import Errors from '../../language/node/errors.js'
import CharacterFormatParser from './character-format/parser.js'
import HeaderRecordSpecs from './character-format/specs/header-record.js'
import BaseSegmentRecordSpecs from './character-format/specs/base-segment-record.js'

// Welcome to the Parser Factory
// The Parser Factory generates the correct parser since there could be multiple
// types of data formats/records that would likely need to be parsed in the
// future
const Parser = (format, recordType) => {
    if (format === 'CHARACTER_FORMAT') {
        switch (recordType) {
            case 'HEADER_RECORD':
                return CharacterFormatParser(HeaderRecordSpecs)
            case 'BASE_SEGMENT_RECORD':
                return CharacterFormatParser(BaseSegmentRecordSpecs)
            default:
                throw new Error(Errors.UNSUPPORTED_RECORD_TYPE)
        }
    } else {
        throw new Error(Errors.UNSUPPORTED_FORMAT)
    }
}

export default Parser
