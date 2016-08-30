import React from 'react'
import DisplayFactory from './DisplayFactory.js'
import DisplayText from './DisplayText.js'
import DisplayJSON from './DisplayJSON.js'
import DisplayRaw from './DisplayRaw.js'

const DisplayContent = ({ content }) => {
    return (
        <div id="display-content-component">
            <DisplayFactory content={content} />
        </div>
    )
}

export default DisplayContent
