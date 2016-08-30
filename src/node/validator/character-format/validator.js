import Helper from '../helpers.js'
import Errors from '../../../language/node/validator/character-format/errors.js'
import HeaderRecordRules from './rules/header-record.js'
import BaseSegmentRecordRules from './rules/base-segment-record.js'

// This is the heart of the rules engine, and would likely return a closure
// since the "record" type is already supplied to the validator generator and it
// would not make much sense for the client to supply that again.
const Validator = (record, fields) => {
    // For each field
        // If field's value is blank or invalid
            // If field's value is required (Y)
                // throw error
            // If field's value is required (HR)
                // throw warning
        // else
            // Validate field's "super types"
            // If any of the field's "super types" check fail
                // throw appropiate error

        // If there are additional rules for this type of record
            // If field id is present in rules
                // Ensure field passes the rule
                // If the field did not pass the rule
                    // throw error
    // end iterating
}

export default Validator
