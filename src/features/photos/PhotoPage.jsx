import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectPhotoById } from "./photosSlice";

const PhotoPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const photo = useSelector((state) => selectPhotoById(state, params.id));
  console.log(photo, params.id);
  const { name, file, description } = photo;

  const handleClick = () => navigate("/");

  return (
    <div>
      <img src={file} width="250" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button" onClick={handleClick}>
        GO BACK
      </button>
    </div>
  );
};

export default PhotoPage;
