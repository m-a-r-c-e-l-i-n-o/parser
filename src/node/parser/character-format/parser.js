import Errors from '../../../language/node/parser/character-format/errors.js'

// This is the parser. It return a closure that walks on the string, field by
// field with the guidance of the specs, extracts the field's value and stores
// them in an object with their respective identifiers. The end result is a key
// value object, which is returned for additional processing
const Parser = (spec = []) => {
    if (!Array.isArray(spec) || spec.length === 0) {
        throw new Error(Errors.INVALID_SPEC)
    }
    return (recordString) => {
        const fields = []
        spec.forEach(field => {
            fields.push(Object.assign({}, field, {
                value: recordString.substr(field.position, field.length)
            }))
        })
        return fields
    }
}

export default Parser
