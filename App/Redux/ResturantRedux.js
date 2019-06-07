import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  resturantRequest: ['vendorCode', 'lat', 'lng'],
  resturantSuccess: ['resturantData'],
  resturantFailure: null
})

export const ResturantTypes = Types /* actionType */
export default Creators /* actions */

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  resturantData: null,
  fetching: null,
  error: null
//   vendorCode: null,
//   lat: null,
//   lng: null
})

/* ------------- Selectors ------------- */

export const ResturantSelectors = {
  selectResturantData: state => state.resturant.resturantData
}

/* ------------- Reducers ------------- */

// request the avatar for a user
// action := { username }
export const request = (state, action) =>
  state.merge({ fetching: true, resturantData: null })

// successful avatar lookup
export const success = (state, action) => {
  const { resturantData } = action
  return state.merge({ fetching: false, error: null, resturantData })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, resturantData: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESTURANT_REQUEST]: request,
  [Types.RESTURANT_SUCCESS]: success,
  [Types.RESTURANT_FAILURE]: failure
})
