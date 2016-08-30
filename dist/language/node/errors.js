"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Provides error language for validating report generation
const Errors = {};

Errors.UNSUPPORTED_FORMAT = `
The report requested is not supported!
`;
Errors.UNSUPPORTED_RECORD_TYPE = `
The record type requested is not supported!
`;

Errors.INVALID_RECORD_STRING = `
The supplied record string is invalid!
`;

exports.default = Errors;