import './App.css';
import Index from '../src/component/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div><Route to="/"><Index/></Route></div>
      </div>
    </Router>
  );
}

export default App;
