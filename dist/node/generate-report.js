'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _errors = require('../language/node/errors.js');

var _errors2 = _interopRequireDefault(_errors);

var _index = require('./parser/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Validator from './validator/index.js'

const GenerateReport = (format, recordString) => {
    if (format === 'CHARACTER_FORMAT') {
        if (!recordString || typeof recordString !== 'string' || recordString.length !== 852) {
            throw new Error(_errors2.default.INVALID_RECORD_STRING);
        }
        const record = {};
        const headerID = 'HEADER_RECORD';
        const baseSegmentID = 'BASE_SEGMENT_RECORD';
        const headerString = recordString.slice(0, 426);
        const baseSegmentString = recordString.slice(426);

        const parsedHeader = (0, _index2.default)(format, headerID);
        record[headerID] = parsedHeader(headerString);

        const parseBaseSegment = (0, _index2.default)(format, baseSegmentID);
        record[baseSegmentID] = parseBaseSegment(baseSegmentString);

        // Validator would go here...
        // Validator(format, headerID, record[headerID])
        // Validator(
        //  format, baseSegmentID, record[baseSegmentID], record[headerID]
        //)

        return record;
    }

    throw new Error(_errors2.default.UNSUPPORTED_FORMAT);
};

exports.default = GenerateReport;