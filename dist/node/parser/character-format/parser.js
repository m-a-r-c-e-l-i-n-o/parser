'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = require('../../../language/node/parser/character-format/errors.js');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is the parser. It return a closure that walks on the string, field by
// field with the guidance of the specs, extracts the field's value and stores
// them in an object with their respective identifiers. The end result is a key
// value object, which is returned for additional processing
const Parser = function () {
    let spec = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    if (!Array.isArray(spec) || spec.length === 0) {
        throw new Error(_errors2.default.INVALID_SPEC);
    }
    return recordString => {
        const fields = [];
        spec.forEach(field => {
            fields.push(Object.assign({}, field, {
                value: recordString.substr(field.position, field.length)
            }));
        });
        return fields;
    };
};

exports.default = Parser;