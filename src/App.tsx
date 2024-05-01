import Login from "./LoginTable";
import "./App.css";
import PhoneItem from "./Phone";

function App() {
  return (
    <main className="Main">
      <div className="phone">
        <PhoneItem />
      </div>
      <div>
        <Login />
      </div>
    </main>
  );
}

export default App;
