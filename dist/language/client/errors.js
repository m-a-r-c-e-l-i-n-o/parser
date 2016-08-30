"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Provides error language for validating report generation
const Errors = {};

Errors.INVALID_REPORT = `
Report field cannot be empty!
`;

Errors.SERVER_ERROR = `
Opss, something is up with the server, try again later.
`;

exports.default = Errors;