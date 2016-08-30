import Errors from '../../../src/language/node/errors.js'
import Parser from '../../../src/node/parser/index.js'

describe ('Parser', () => {
    it ('should throw error is report format is not supplied or unsupported', () => {
        expect(() => Parser()).toThrowError(Errors.UNSUPPORTED_FORMAT)
        expect(() => Parser('INVALID')).toThrowError(Errors.UNSUPPORTED_FORMAT)
    })
    it ('should throw error is report type is not supplied or unsupported', () => {
        expect(() => Parser('CHARACTER_FORMAT'))
        .toThrowError(Errors.UNSUPPORTED_RECORD_TYPE)
        expect(() => Parser('CHARACTER_FORMAT', 'INVALID'))
        .toThrowError(Errors.UNSUPPORTED_RECORD_TYPE)
    })
    it ('should return a method ', () => {
        expect(Parser('CHARACTER_FORMAT', 'HEADER_RECORD'))
        .toEqual(jasmine.any(Function))
        expect(Parser('CHARACTER_FORMAT', 'BASE_SEGMENT_RECORD'))
        .toEqual(jasmine.any(Function))
    })
})
