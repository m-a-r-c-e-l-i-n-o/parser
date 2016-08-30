import { combineReducers as CombineReducers } from 'redux'
import Report from './report.js'
import Pending from './pending.js'

const Reducers = CombineReducers({
    pending: Pending,
    report: Report
})

export default Reducers

