import { BrowserRouter, Routes, Route } from "react-router";
import PhotosLoader from "./features/photos/PhotosLoader";
import PhotosServerLoader from "./features/photos/PhotosServerLoader";
import PhotosShow from "./features/photos/PhotosShow";
import PhotoPage from "./features/photos/PhotoPage";
import './app.css';

const PhotosLoaderContainer = () => (
  <>
  <div className="btns">
    <PhotosLoader />
    <PhotosServerLoader />
  </div>
  <div  className="photos__container" >
   <PhotosShow />
   </div>
  </>
);

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PhotosLoaderContainer />} />
        <Route path="/:id" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
