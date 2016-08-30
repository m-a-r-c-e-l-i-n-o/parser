import Helper from '../../helpers.js'
import CommonRules from './common-record.js'

// Validates field dependency and one-off rules

// All methods receive a field object with all the properties in the parser's
// spec, a fields object containing all the parsed fields in the base segment
// record, and finally, a header record object containing all the fields from
// the header record previously parsed from the physical record

// The word "value" is used in multiple contexts in the comments.
// When used alone, it refers to the variable present in the method's signature.
// The other mentions of "value" has an explicity source defined before it
// (i.e. "Identification Number"'s value)

const Rules = Object.assign(CommonRules, {}, {
    PROCESSING_INDICATOR: ({ value }) => {
        // Ensure the value is a constant of "1"
    },
    CORRECTION_INDICATOR: ({ value }, fields) => {
        // If value is "0"
            // simply return true
        // If value is "1"
            // Get the "Identification Number"'s value from fields
            // Get the "Billing Date"'s value from fields
            // Get the "Special Comment"'s value from fields
            // Look up a previouos record in database that matches the
            // "Identification Number" and "Billing Date" to ensure that
            // there is a record to be corrected
            // Ensure the "Special Comment"'s value is not blank as it provides
            // information about the correction
    },
    IDENTIFICATION_NUMBER: ({ value }) => {
        // Ensure that value is at least 5 digits long and not all nines
        // Ensure that the value matches an id of a data furnisher present in
        // the database
    },
    CONSUMER_ACCOUNT_NUMBER: ({ value }) => {
        // Ensure that there are no spaces embedded in the value
    },
    PORTFOLIO_TYPE: ({ value }) => {
        // Ensure that value is: "C", "I", "M", "O", or "R"
    },
    ACCOUNT_TYPE: ({ value }) => {
        // Ensure that value is:
        // "7B", "8B", "9B", "0C", "1C", "2C", "4D", "6D", or "0F"
    },
    DATE_OPENED: ({ value }, fields) => {
        // Get the "Identification Number"'s value from fields
        // Get the "Consumer Account Number"'s value from fields
        // Look up a previouos record in database that matches the
        // "Identification Number" and "Consumer Account Number" values to
        // ensure that all matching records have the same value as the one
        // provided here
    },
    CREDIT_LIMIT: ({ value }, fields) => {
        // Get "Portfolio Type"'s value from fields
        // If "Portfolio Type"'s value is "I", "M", or "O"
            // Ensure that value is all zeros
        // Else if "Portfolio Type"'s value is "C" or "R"
            // Ensure that value is greater than zero
    },
    TERMS_DURATION: ({ value }, fields) => {
        // Get "Portfolio Type"'s value from fields
        // If "Portfolio Type"'s value is "C"
            // Ensure that value is a constant of "LOC"
        // Else if "Portfolio Type"'s value is "I", "M"
            // Ensure that value is greater than zero
        // Else if "Portfolio Type"'s value is "O"
            // Ensure that value has constant of "001"
        // Else if "Portfolio Type"'s value is "R"
            // Ensure that value has constant of "REV"
    },
    TERMS_FREQUENCY: ({ value }) => {
        // Ensure value is:
        // "D", "P", "W", "B", "E", "M", "L", "Q", "T", "S", or "Y"
    },
    SCHEDULED_MONTHLY_PAYMENT_AMOUNT: ({ value }, fields) => {
        // Get "Portfolio Type"'s value
        // If "Portfolio Type"'s value is "I", "M", "C" or "R"
            // Ensure that value is greater than zero
        // Else "Portfolio Type"'s value is "O"
            // Ensure that value is all zeros
    },
    ACCOUNT_STATUS: ({ value }) => {
        // If value is "05", "11", "13", "61", "62", "63", "64", "65",
        // "71", "78", "80", "82", "83", "84", "88", "89", "93", "94", "95",
        // "96", "97" or "DA"
    },
    PAYMENT_RATING: ({ value }, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "05", "13", "65", "88", "89", "94" or
        // "95"
            // Ensure value is "0", "1", "2", "3", "4", "5", "6", "G", or "L"
    },
    PAYMENT_HISTORY_PROFILE: ({ value }) => {
        // Ensure that each character in the value's prefix is:
        // "0", "1", "2", "3", "4", "5", "6",
        // "B", "D", "E", "G", "H", "J", "K", "L"
        // Ensure that any remaining characters are all "B"s
    },
    SPECIAL_COMMENT: ({ value }, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "05", "13", "65", "88", "89", "94"
        // or "95"
            // Ensure value is not blank
    },
    COMPLIANCE_CONDITION_CODE: ({ value }) => {
        // If value is not blank
            // Ensure that value is:
            // "XA", "XB", "XC", "XD", "XE", "XF", "XG", "XH", "XJ", or "XR"
    },
    'ORIGINAL_CHARGE-OFF_AMOUNT': ({ value }, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "64" or "97"
            // Ensure value is greater than zero
    },
    BILLING_DATE: ({ value }, fields, headerFields) => {
        // Get "headerFields"'s "Activity Date"'s value
        // Check that value is less than the "Activity Date"'s value
        // but greater than the start of that "Activity Date"'s month
    },
    'FCRA_COMPLIANCE/DATE_OF_FIRSTDELINQUENCY': ({ value }, fields) => {
        // Get "Account Status"'s value
        // Get "Payment Rating"'s value
        // Get "Consumer Information Indicator"'s value
        // If value is ("61-65", "71", "78", "80", "82-84", "88-89", or "93-97")
        // or ("Account Status"'s value is "05", "13", "65", "88", "89", "94"
        // or "95" and "Payment Rating"'s value is "1", "2", "3", "4", "5", "6",
        // "G" or "L" ) or ("Consumer Information Indicator"'s value is "E-H",
        // "1A", or "V-Y" and "Account Status"'s value is "11")
            // Ensure value is date
        // Else
            // Ensure value is all zeros
    },
    CONSUMER_TRANSACTION_TYPE: ({ value }) => {
        // If value is not blank
            // Ensure value is "1", "2", "3", "4", "5", "6", "7", "8", "9",
            // or "A"
    },
    GENERATION_CODE: ({ value }) => {
        // If value is not blank
            // Ensure value is "J", "S", "1", "2", "3", "4", "5", "6", "7", "8"
            // "9"
    },
    ECOA_CODE: ({ value }) => {
        // Ensure value is "1", "2", "7", "T", "W", "X", "Z"
    },
    CONSUMER_INFORMATION_INDICATOR: ({ value }) => {
        // If value is not blank
            // Ensure value is "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
            // "K", "L", "M", "N", "O", "P", "1A", "Z", "Q", "R", "V", "W", "X",
            // "Y", "S", "T", or "U"
    },
    COUNTRY_CODE: ({ value }) => {
        // If value is not blank
            // Ensure value is of codes in "Exhibit 10"
            // There's too many to copy and paste, at the moment
    },
    FIRST_LINE_OF_ADDRESS: ({ value }) => {
        // Ensure value follows instructions listed in "Exhibit 11"
        // They appear to be more conventions than requirements,
        // Not sure how much this should be inforced
        // For example, one of the recommendations is
        // "Do not report non-address information in the Address fields."
        // It's unclear how one would go about making that distinction without
        // some sort of AI
    },
    STATE: ({ value }) => {
        // Ensure value is of codes in "Exhibit 12"
        // There's too many to copy and paste, at the moment
    },
    ADDRESS_INDICATOR: ({ value }) => {
        // If value is not blank
            // Ensure value is: "Y", "N", "B", "U", "D", "M", "S", or "P"
    },
    RESIDENCE_CODE: ({ value }) => {
        // If value is not blank
            // Ensure value is: "O", or "R"
    }
})

export default Rules
