import Login from "./components/Login/Login";
import Phone from "./components/Phone/Phone";
import Links from "./components/Links/Links";
import "./App.css";

function App() {
  return (
    <main className="container">
      <div className="container_phone">
        <div>
          <Phone />
        </div>
        <div>
          <Login />
        </div>
      </div>
      <Links />
    </main>
  );
}

export default App;
