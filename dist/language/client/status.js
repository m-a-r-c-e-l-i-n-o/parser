"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Provides error language for validating report generation
const Status = {};

Status.WAITING_TO_GENERATE_REPORT = `
Go ahead press the button, it won't hurt... Or will it? >:D Muhaha!
`;
Status.LOADING = `
Loading...
`;

exports.default = Status;