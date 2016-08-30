'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('../../helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

var _commonRecord = require('./common-record.js');

var _commonRecord2 = _interopRequireDefault(_commonRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validates field dependency and one-off rules

// All methods receive a field object with all the properties in the parser's
// spec, a fields object containing all the parsed fields in the base segment
// record, and finally, a header record object containing all the fields from
// the header record previously parsed from the physical record

// The word "value" is used in multiple contexts in the comments.
// When used alone, it refers to the variable present in the method's signature.
// The other mentions of "value" has an explicity source defined before it
// (i.e. "Identification Number"'s value)

const Rules = Object.assign(_commonRecord2.default, {}, {
    PROCESSING_INDICATOR: _ref => {
        // Ensure the value is a constant of "1"

        let value = _ref.value;
    },
    CORRECTION_INDICATOR: (_ref2, fields) => {
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

        let value = _ref2.value;
    },
    IDENTIFICATION_NUMBER: _ref3 => {
        // Ensure that value is at least 5 digits long and not all nines
        // Ensure that the value matches an id of a data furnisher present in
        // the database

        let value = _ref3.value;
    },
    CONSUMER_ACCOUNT_NUMBER: _ref4 => {
        // Ensure that there are no spaces embedded in the value

        let value = _ref4.value;
    },
    PORTFOLIO_TYPE: _ref5 => {
        // Ensure that value is: "C", "I", "M", "O", or "R"

        let value = _ref5.value;
    },
    ACCOUNT_TYPE: _ref6 => {
        // Ensure that value is:
        // "7B", "8B", "9B", "0C", "1C", "2C", "4D", "6D", or "0F"

        let value = _ref6.value;
    },
    DATE_OPENED: (_ref7, fields) => {
        // Get the "Identification Number"'s value from fields
        // Get the "Consumer Account Number"'s value from fields
        // Look up a previouos record in database that matches the
        // "Identification Number" and "Consumer Account Number" values to
        // ensure that all matching records have the same value as the one
        // provided here

        let value = _ref7.value;
    },
    CREDIT_LIMIT: (_ref8, fields) => {
        // Get "Portfolio Type"'s value from fields
        // If "Portfolio Type"'s value is "I", "M", or "O"
        // Ensure that value is all zeros
        // Else if "Portfolio Type"'s value is "C" or "R"
        // Ensure that value is greater than zero

        let value = _ref8.value;
    },
    TERMS_DURATION: (_ref9, fields) => {
        // Get "Portfolio Type"'s value from fields
        // If "Portfolio Type"'s value is "C"
        // Ensure that value is a constant of "LOC"
        // Else if "Portfolio Type"'s value is "I", "M"
        // Ensure that value is greater than zero
        // Else if "Portfolio Type"'s value is "O"
        // Ensure that value has constant of "001"
        // Else if "Portfolio Type"'s value is "R"
        // Ensure that value has constant of "REV"

        let value = _ref9.value;
    },
    TERMS_FREQUENCY: _ref10 => {
        // Ensure value is:
        // "D", "P", "W", "B", "E", "M", "L", "Q", "T", "S", or "Y"

        let value = _ref10.value;
    },
    SCHEDULED_MONTHLY_PAYMENT_AMOUNT: (_ref11, fields) => {
        // Get "Portfolio Type"'s value
        // If "Portfolio Type"'s value is "I", "M", "C" or "R"
        // Ensure that value is greater than zero
        // Else "Portfolio Type"'s value is "O"
        // Ensure that value is all zeros

        let value = _ref11.value;
    },
    ACCOUNT_STATUS: _ref12 => {
        // If value is "05", "11", "13", "61", "62", "63", "64", "65",
        // "71", "78", "80", "82", "83", "84", "88", "89", "93", "94", "95",
        // "96", "97" or "DA"

        let value = _ref12.value;
    },
    PAYMENT_RATING: (_ref13, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "05", "13", "65", "88", "89", "94" or
        // "95"
        // Ensure value is "0", "1", "2", "3", "4", "5", "6", "G", or "L"

        let value = _ref13.value;
    },
    PAYMENT_HISTORY_PROFILE: _ref14 => {
        // Ensure that each character in the value's prefix is:
        // "0", "1", "2", "3", "4", "5", "6",
        // "B", "D", "E", "G", "H", "J", "K", "L"
        // Ensure that any remaining characters are all "B"s

        let value = _ref14.value;
    },
    SPECIAL_COMMENT: (_ref15, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "05", "13", "65", "88", "89", "94"
        // or "95"
        // Ensure value is not blank

        let value = _ref15.value;
    },
    COMPLIANCE_CONDITION_CODE: _ref16 => {
        // If value is not blank
        // Ensure that value is:
        // "XA", "XB", "XC", "XD", "XE", "XF", "XG", "XH", "XJ", or "XR"

        let value = _ref16.value;
    },
    'ORIGINAL_CHARGE-OFF_AMOUNT': (_ref17, fields) => {
        // Get "Account Status"'s value
        // If "Account Status"'s value is "64" or "97"
        // Ensure value is greater than zero

        let value = _ref17.value;
    },
    BILLING_DATE: (_ref18, fields, headerFields) => {
        // Get "headerFields"'s "Activity Date"'s value
        // Check that value is less than the "Activity Date"'s value
        // but greater than the start of that "Activity Date"'s month

        let value = _ref18.value;
    },
    'FCRA_COMPLIANCE/DATE_OF_FIRSTDELINQUENCY': (_ref19, fields) => {
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

        let value = _ref19.value;
    },
    CONSUMER_TRANSACTION_TYPE: _ref20 => {
        // If value is not blank
        // Ensure value is "1", "2", "3", "4", "5", "6", "7", "8", "9",
        // or "A"

        let value = _ref20.value;
    },
    GENERATION_CODE: _ref21 => {
        // If value is not blank
        // Ensure value is "J", "S", "1", "2", "3", "4", "5", "6", "7", "8"
        // "9"

        let value = _ref21.value;
    },
    ECOA_CODE: _ref22 => {
        // Ensure value is "1", "2", "7", "T", "W", "X", "Z"

        let value = _ref22.value;
    },
    CONSUMER_INFORMATION_INDICATOR: _ref23 => {
        // If value is not blank
        // Ensure value is "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        // "K", "L", "M", "N", "O", "P", "1A", "Z", "Q", "R", "V", "W", "X",
        // "Y", "S", "T", or "U"

        let value = _ref23.value;
    },
    COUNTRY_CODE: _ref24 => {
        // If value is not blank
        // Ensure value is of codes in "Exhibit 10"
        // There's too many to copy and paste, at the moment

        let value = _ref24.value;
    },
    FIRST_LINE_OF_ADDRESS: _ref25 => {
        // Ensure value follows instructions listed in "Exhibit 11"
        // They appear to be more conventions than requirements,
        // Not sure how much this should be inforced
        // For example, one of the recommendations is
        // "Do not report non-address information in the Address fields."
        // It's unclear how one would go about making that distinction without
        // some sort of AI

        let value = _ref25.value;
    },
    STATE: _ref26 => {
        // Ensure value is of codes in "Exhibit 12"
        // There's too many to copy and paste, at the moment

        let value = _ref26.value;
    },
    ADDRESS_INDICATOR: _ref27 => {
        // If value is not blank
        // Ensure value is: "Y", "N", "B", "U", "D", "M", "S", or "P"

        let value = _ref27.value;
    },
    RESIDENCE_CODE: _ref28 => {
        // If value is not blank
        // Ensure value is: "O", or "R"

        let value = _ref28.value;
    }
});

exports.default = Rules;