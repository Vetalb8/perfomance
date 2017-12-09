import { createAction, createReducer } from 'redux-act'
import { setIsSaving } from './isSaving'

const saveDateAction = createAction('@@date/SAVE_DATE')
// const setIsSaving = createAction('@@date/SET_IS_SAVING')


const initialState = {
  isSaving: false,
  date: '',
};

export const saveDate = () => (dispatch) => {
  dispatch(setIsSaving(true))

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Date().toLocaleTimeString())
    }, 3000)
  })
    .then((date) => {
      dispatch(saveDateAction(date))
      dispatch(setIsSaving(false))
    })
    .catch(err => {
      dispatch(setIsSaving(false))
    })
}

const date = createReducer({
  [saveDateAction]: (state, date) => ({
    ...state,
    date,
  }),
  [setIsSaving]: (state, isSaving) => ({
    ...state,
    isSaving,
  })
}, initialState)

export default date
