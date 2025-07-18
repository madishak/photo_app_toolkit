import { uniqueId } from "lodash";
import axios from "axios";
import { call, put, takeEvery, all } from "redux-saga/effects";
// import { PHOTOS_FETCH_REQUEST, PHOTOS_FETCH_SUCCESS, PHOTOS_FETCH_FAILURE } from '../constants';
import { loadSeverPhotos, loadSeverPhotosSuccess, loadSeverPhotosFailure } from './photosSlice';

function* photosServerLoader() {
  try {
    const response = yield call(
      axios.get,
      `https://api.unsplash.com/photos/random/?client_id=WSqyW1yumi_u_R2plvHEsQE6T8RDiQHFqFjy-XrWgQE&&count=5&&query=city`
    );
    const data = yield response.data;
    const thumbs = yield data.map(({ urls, user, alt_description }) => ({
      id: uniqueId(),
      name: user.name,
      file: urls.thumb,
      description: alt_description,
    }));
    yield put(loadSeverPhotosSuccess(thumbs));
  } catch (error) {
    yield put(loadSeverPhotosFailure(error));
  }
}

function* photosServerLoaderWatcher() {
  yield takeEvery(loadSeverPhotos.type, photosServerLoader);
}

// export default function* rootSaga() {
//   yield all([getPhotosWatcher()]);
// }


export default photosServerLoaderWatcher;