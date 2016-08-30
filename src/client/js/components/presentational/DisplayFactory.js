import React from 'react'
import DisplayText from './DisplayText.js'
import DisplayJSON from './DisplayJSON.js'
import DisplayRaw from './DisplayRaw.js'

const DisplayFactory = ({ content }) => {
    switch (typeof content) {
        case 'object':
            return <DisplayJSON object={content}></DisplayJSON>
        case 'string':
            return <DisplayText text={content}></DisplayText>
        default:
            return <DisplayRaw content={content}></DisplayRaw>
    }
}

export default DisplayFactory
