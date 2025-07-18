import { useRef } from "react";
// import { connect } from "react-redux";
import { uniqueId } from "lodash";
// import { makeStyles } from "@material-ui/core/styles";
// import { addPhotos } from "./actions";
// import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { loadPhotos } from './photosSlice';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     margin: 20,
//   },
// }));

// const mapStateToProps = (state) => {
//   return {
//     photos: state.photos,
//   };
// };

const PhotosLoader = (props) => {
//   const classes = useStyles();
  const fileInput = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { dispatch } = props;

    const files = Object.values(fileInput.current.files).map((file) => ({
      id: uniqueId(),
      name: file.name.slice(0, 10).split(".")[0],
      file: URL.createObjectURL(file),
      description: URL.createObjectURL(file),
    }));
    dispatch(loadPhotos(files));
    console.log(files);
  };

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        
        <input
          accept="image/*"
          type="file"
          multiple
          ref={fileInput}
        />

        <button
          className="form__button"
          type="submit"
          variant="contained"
          color="primary"
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default PhotosLoader;
