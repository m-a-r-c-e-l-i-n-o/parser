'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('../helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

var _errors = require('../../../language/node/validator/character-format/errors.js');

var _errors2 = _interopRequireDefault(_errors);

var _headerRecord = require('./rules/header-record.js');

var _headerRecord2 = _interopRequireDefault(_headerRecord);

var _baseSegmentRecord = require('./rules/base-segment-record.js');

var _baseSegmentRecord2 = _interopRequireDefault(_baseSegmentRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
};

exports.default = Validator;