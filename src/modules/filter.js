import { createReducer, createAction } from 'redux-act'

export const setFilter = createAction('@@filter/SET_FILTER')


const initialState = {
  filterValue: ''
}

const filter = createReducer({
  [setFilter]: (state, filterValue) => ({
    ...state,
    filterValue,
  })
}, initialState)

export default filter
