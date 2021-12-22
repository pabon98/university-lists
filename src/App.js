import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import University from './Components/University/University';
import UniversityDetails from './Components/UniversityDetails/UniversityDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}>
          </Route>
          <Route path="/home" element={<Home></Home>}>
          </Route>
          <Route path="/university" element={<University></University>}></Route>
          <Route path="/details/:detailsId" element={<UniversityDetails/>} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
