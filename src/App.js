// import "./App.css";
import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div className="App" style={{ padding: 30 }}>
      <h2>Aplikasi Kontak App</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
