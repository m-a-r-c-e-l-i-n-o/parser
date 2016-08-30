import Helper from '../../helpers.js'

// Validates common field types

// All methods receive a value equal to the field's raw content

const Types = {
    N: (value) => {
        // Ensure only uppercase hexadecimal values
    },
    AN: (value) => {
        // Ensure spaces are only present at the end
        // Ensure all characters are uppercase
    },
    ALL_SPACE: (value) => {
        // Ensure value is all spaces
    },
    DOLLAR_AMOUNT: (value) => {
        // Ensure value is within 0 and 999,999,999
    },
    DATE: (value) => {
        // Ensure first two numbers are within 0 and 13
        // Ensure subsequent two numbers are within 0 and 31
        // Ensure subsequent four numbers are within 1000 and 3000
    },
    TIMESTAMP: (value) => {
        // Ensure first two numbers are within 0 and 13
        // Ensure subsequent two numbers are within 0 and 31
        // Ensure subsequent four numbers are within 1000 and 3000
        // Ensure subsequent two numbers are within 0 and 13
        // Ensure subsequent two numbers are within -1 and 61
        // Ensure subsequent two numbers are within -1 and 61
    },
    NAME: (value) => {
        // Ensure name contains only alphanumeric characters,
        // with no spaces or special characters, with the exception of hyphens
    }
}

export default Types
