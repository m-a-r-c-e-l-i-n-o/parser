'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('./helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

var _validator = require('./character-format/validator.js');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Welcome to the Validator Factory
// The Validator Factory generates the correct validator since there could be
// multiple types of data formats/records that would likely need to be validated
// in the future
const Validator = (format, recordType, fields, headerFields) => {
    // If format is of character format
    // If record type is header
    // return a character format validator with a header record option
    // preset
    // Example: CharacterFormatValidator('HEADER_RECORD', fields)
    // Else if record type is base segment and headerFields is supplied
    // return a character format validator with a base segment record
    // option preset
    // Example: CharacterFormatValidator('BASE_SEGMENT_RECORD', fields)
    // Else
    // Throw error since we don't support other types
};

exports.default = Validator;