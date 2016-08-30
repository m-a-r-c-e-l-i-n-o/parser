import Helper from '../../helpers.js'
import CommonRules from './common-record.js'

// Validates field dependency and one-off rules

// All methods receive a field object with all the properties in the parser's
// spec, a fields object containing all the parsed fields in the header record,
// and finally, a header record object containing all the fields from the header
// record previously parsed from the physical record

const Rules = Object.assign(CommonRules, {}, {
    RECORD_IDENTIFIER: ({value}, fields) => {
        // Ensure the value is a constant of "HEADER"
    }
})

export default Rules
