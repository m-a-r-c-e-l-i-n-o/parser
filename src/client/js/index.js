import 'whatwg-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore as CreateStore } from 'redux'
import { applyMiddleware as ApplyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import App from './components/App.js'
import Reducers from './reducers/index.js'

const Store = ApplyMiddleware(Thunk)(CreateStore)(Reducers)

ReactDOM.render(
    <Provider store={Store}>
        <App></App>
    </Provider>,
    document.getElementById('app')
)
