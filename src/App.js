import "./App.css";
import Die from "./Die";
function App() {
  return (
    <div className="App">
      {/* must be in one, two three like that cause of icon naming stle from fontawesome */}
      <Die faceValue="six" />
      <Die faceValue="one" />
      <Die faceValue="three" />
      <Die faceValue="five" />
    </div>
  );
}

export default App;
