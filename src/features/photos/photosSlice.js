import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  photos: [],
  status: 'idle',
  error: null
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    loadPhotos: (state, action) => {
      const { payload } = action;
      state.photos.push(...payload);

      // state.photos = [...state.photos, ...action.payload];
      console.log(current(state.photos), payload)
    },
    loadSeverPhotos: (state, action) => {
      state.status = 'pending';
    },
    loadSeverPhotosSuccess: (state, action) => {
      const { payload } = action;
      state.status = 'succeeded';
      state.photos.push(...payload);      
    },
    loadSeverPhotosFailure: (state, action) => {
      state.status = 'failed';
      const { message } = action;
      state.error = message
      
    }
  },
  selectors: {
    selectAllPhotos: (state) => state.photos,
    selectPhotoById: (state, id) => state.photos.find(photo => photo.id === id)
  },
})

export const { loadPhotos, loadSeverPhotos, loadSeverPhotosSuccess, loadSeverPhotosFailure } = photosSlice.actions;

export const { selectAllPhotos, selectPhotoById } = photosSlice.selectors;

export default photosSlice.reducer;
