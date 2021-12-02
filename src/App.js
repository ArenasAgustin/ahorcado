import Dibujo from "./components/Dibujo/Dibujo";
import Palabra from "./components/Palabra/Palabra";

function App() {
  return (
    <div className="App">
      <Dibujo />

      <Palabra palabra="holaaaaaa" />
    </div>
  );
}

export default App;
