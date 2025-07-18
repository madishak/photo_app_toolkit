import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router";
import { selectAllPhotos } from './photosSlice';

const PhotosShow = () => {
  const navigate = useNavigate();
const photos = useSelector(selectAllPhotos);

//   const handleRemoveCard = (id) => {
//     const { dispatch } = props;
//     dispatch(removePhoto(id));
//   };

  const handlePage = (id) => () => navigate(`/${id}`);
  
  
  return photos && photos.map(({ id, name, file }) => (
        <Link to={id} key={id} onClick={handlePage(id)}>
            <img src={file} width='200' />
            <p>{name}</p>
        </Link>
      ));
};

export default PhotosShow;
