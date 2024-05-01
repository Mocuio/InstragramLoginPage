import homePhones from "./components/phonePictures/home-phones.png";
import "./App.css";
import "./components/phonePictures/PhotosLoop.css";

function PhoneItem() {
  return (
    <div>
      <img src={homePhones} alt="" />
      <div className="animatioPhoto1"></div>
    </div>
  );
}
export default PhoneItem;
