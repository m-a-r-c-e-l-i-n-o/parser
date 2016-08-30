'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = require('../../language/node/errors.js');

var _errors2 = _interopRequireDefault(_errors);

var _parser = require('./character-format/parser.js');

var _parser2 = _interopRequireDefault(_parser);

var _headerRecord = require('./character-format/specs/header-record.js');

var _headerRecord2 = _interopRequireDefault(_headerRecord);

var _baseSegmentRecord = require('./character-format/specs/base-segment-record.js');

var _baseSegmentRecord2 = _interopRequireDefault(_baseSegmentRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Welcome to the Parser Factory
// The Parser Factory generates the correct parser since there could be multiple
// types of data formats/records that would likely need to be parsed in the
// future
const Parser = (format, recordType) => {
    if (format === 'CHARACTER_FORMAT') {
        switch (recordType) {
            case 'HEADER_RECORD':
                return (0, _parser2.default)(_headerRecord2.default);
            case 'BASE_SEGMENT_RECORD':
                return (0, _parser2.default)(_baseSegmentRecord2.default);
            default:
                throw new Error(_errors2.default.UNSUPPORTED_RECORD_TYPE);
        }
    } else {
        throw new Error(_errors2.default.UNSUPPORTED_FORMAT);
    }
};

exports.default = Parser;