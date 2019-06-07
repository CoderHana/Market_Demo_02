import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ResturantActions from '../Redux/ResturantRedux'

export function * getResturant (api, action) {
  // action: resturantRequest
  const { vendorCode, lat, lng } = action
  // make the call to the api
  const response = yield call(api.getResturants, vendorCode, lat, lng)

  if (response.ok) {
    const resturantData = path(['data', 'data'], response)
    // do data conversion here if needed
    yield put(ResturantActions.resturantSuccess(resturantData))
  } else {
    yield put(ResturantActions.resturantFailure())
  }
}
