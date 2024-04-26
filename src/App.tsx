import Login from "./LoginTable";
import "./App.css";
import PhoneItem from "./Phone";

("./Phone.tsx");

function App() {
  return (
    <main className="Main">
      <div className="PhoneContainer">
        <div className="phone">
          <PhoneItem />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </main>
  );
}

export default App;
