import { createAction, createReducer } from 'redux-act'

export const setIsSaving = createAction('@@isSaving/SET_IS_SAVING')

const initialState = false

const isSaving = createReducer({
  [setIsSaving]: (state, isSaving) => isSaving
}, initialState)

export default isSaving
