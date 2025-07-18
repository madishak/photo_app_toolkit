// sagas/index.js
import { all } from 'redux-saga/effects';
import photosServerLoaderWatcher from '../features/photos/PhotosServerSaga';

// Root saga
function* rootSaga() {
  yield all([
    photosServerLoaderWatcher(), 
  ]);
}

export default rootSaga;