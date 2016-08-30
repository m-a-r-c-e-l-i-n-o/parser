import React from 'react'
import JSONMarkup from 'json-markup'

const DisplayJSON = ({ object }) => {
    const formattedJSON = JSONMarkup(object)
    return (
        <div
            id="display-json-component"
            // I like to live on the edge, apparently.
            dangerouslySetInnerHTML={{__html: formattedJSON}}
        />
    )
}

export default DisplayJSON
