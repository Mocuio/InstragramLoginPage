import homePhones from "./components/phonePictures/home-phones.png";
import "./App.css";
import PhotosTransition from "./components/phonePictures/PhotosLoopFunction.tsx";
function PhoneItem() {
  return (
    <>
      <div>
        <div className="PhoneScreen">
          <PhotosTransition />
        </div>
        <img className="item" src={homePhones} />
      </div>
    </>
  );
}
export default PhoneItem;
