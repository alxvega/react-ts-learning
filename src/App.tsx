import "./App.css";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className='App'>
      <ToggleButton
        states={["On", "Off", "Indeterminate"]}
        defaultState='On'
      />
      <ToggleButton
        states={["On", "Off", "Indeterminate"]}
        defaultState='Off'
      />
    </div>
  );
}

export default App;
