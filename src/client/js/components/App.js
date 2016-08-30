import React from 'react'
import GenerateReport from './hybrid/GenerateReport.js'
import DisplayReport from './container/DisplayReport.js'

const App = (state) => {
    return (
        <div>
            <GenerateReport />
            <DisplayReport />
        </div>
    )
}

export default App
