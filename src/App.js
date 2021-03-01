import logo from './logo.svg';
import './App.css';
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Welcome from "./Welcome";
import About from "./About";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Welcome/>
      <About/>
    </div>
    
  );
}

export default App;
