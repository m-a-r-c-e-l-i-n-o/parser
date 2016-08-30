import Errors from '../../../../src/language/node/parser/character-format/errors.js'
import Parser from '../../../../src/node/parser/character-format/parser.js'
import HeaderRecordSpecs from '../../../../src/node/parser/character-format/specs/header-record.js'
import BaseSegmentRecordSpecs from '../../../../src/node/parser/character-format/specs/base-segment-record.js'
import { HeaderRecord, BaseSegmentRecord } from '../../../../src/samples/character-format/physical-record.js'

describe ('Parser', () => {
    it ('should throw error is spec is not supplied or invalid', () => {
        expect(() => Parser()).toThrowError(Errors.INVALID_SPEC)
        expect(() => Parser('INVALID')).toThrowError(Errors.INVALID_SPEC)
        expect(() => Parser({})).toThrowError(Errors.INVALID_SPEC)
        expect(() => Parser({ HELLO: 'WORLD' })).toThrowError(Errors.INVALID_SPEC)
    })
    it ('should return a method ', () => {
        expect(Parser([{ HELLO: 'WORLD' }])).toEqual(jasmine.any(Function))
    })
})

describe ('Parser closure', () => {
    it ('should parse character format header record', () => {
        const parse = Parser(HeaderRecordSpecs)
        const headerRecord = parse(HeaderRecord)
        const result = headerRecord.reduce(
            (record, field) => record += field.value,
            ''
        )
        expect(result).toBe(HeaderRecord)
    })
    it ('should return a method that can parse character format base segment record', () => {
        const parse = Parser(BaseSegmentRecordSpecs)
        const baseSegmentRecord = parse(BaseSegmentRecord)
        const result = baseSegmentRecord.reduce(
            (record, field) => record += field.value,
            ''
        )
        expect(result).toBe(BaseSegmentRecord)
    })
})
