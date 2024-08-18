import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom" ;
import Dashboard from './Screen/Dashboard';
 import Widget from './Screen/Components/Widget';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<Dashboard/>} path={'dashboard'}></Route>
          <Route element={<Widget/>} path={'wid'}></Route>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
