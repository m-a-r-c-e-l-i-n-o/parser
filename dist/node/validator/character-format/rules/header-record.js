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
// spec, a fields object containing all the parsed fields in the header record,
// and finally, a header record object containing all the fields from the header
// record previously parsed from the physical record

const Rules = Object.assign(_commonRecord2.default, {}, {
    RECORD_IDENTIFIER: (_ref, fields) => {
        // Ensure the value is a constant of "HEADER"

        let value = _ref.value;
    }
});

exports.default = Rules;