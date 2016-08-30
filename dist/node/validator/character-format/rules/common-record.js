'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _helpers = require('../../helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Validates common field dependency and one-off rules

// All methods receive a field object with all the properties in the parser's
// spec and a fields object containing all the parsed fields in the current
// record.

// The word "value" is used in multiple contexts in the comments.
// When used alone, it refers to the variable present in the method's signature.
// The other mentions of "value" has an explicity source defined before it
// (i.e. "Identification Number"'s value)

const Rules = {
    RECORD_DESCRIPTOR_WORD: (_ref, fields) => {
        // Ensure value reflects the size of the aggregated length of all
        // fields' value

        let value = _ref.value;
    }
};

exports.default = Rules;