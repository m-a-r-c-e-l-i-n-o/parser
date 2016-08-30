import Errors from '../../src/language/node/errors.js'
import GenerateReport from '../../src/node/generate-report.js'
import PhysicalRecordMock from '../mocks/physical-record.json'
import { HeaderRecord, BaseSegmentRecord } from '../../src/samples/character-format/physical-record.js'

describe ('GenerateReport', () => {
    it ('should throw error is format is not supplied or invalid', () => {
        expect(() => GenerateReport())
        .toThrowError(Errors.UNSUPPORTED_FORMAT)
        expect(() => GenerateReport('INVALID'))
        .toThrowError(Errors.UNSUPPORTED_FORMAT)
        expect(() => GenerateReport({}))
        .toThrowError(Errors.UNSUPPORTED_FORMAT)
        expect(() => GenerateReport(null))
        .toThrowError(Errors.UNSUPPORTED_FORMAT)
    })
    it ('should throw error is record string is not supplied or invalid', () => {
        expect(() => GenerateReport('CHARACTER_FORMAT'))
        .toThrowError(Errors.INVALID_RECORD_STRING)
    })
    it ('should throw error is record string length is not 852 characters long', () => {
        expect(() => GenerateReport('CHARACTER_FORMAT', ''))
        .toThrowError(Errors.INVALID_RECORD_STRING)
        expect(() => GenerateReport('CHARACTER_FORMAT', 'HELLO'))
        .toThrowError(Errors.INVALID_RECORD_STRING)
    })
    it ('should generate record object', () => {
        const recordString = HeaderRecord + BaseSegmentRecord
        const reportObject = GenerateReport('CHARACTER_FORMAT', recordString)
        expect(reportObject).toEqual(PhysicalRecordMock)
    })
})
