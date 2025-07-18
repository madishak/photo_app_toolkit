// import {  PHOTOS_FETCH_REQUEST } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { loadSeverPhotos } from './photosSlice';



const PhotosServerLoader = () => {
    const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loadSeverPhotos());
  };

  return (
    <button
      onClick={handleClick}
      type="submit"
      variant="contained"
      color="secondary"
    >
      Get photos from the Internet
    </button>
  );
};

export default PhotosServerLoader;
