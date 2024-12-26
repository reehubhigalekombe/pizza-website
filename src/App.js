import './App.css';
import Navbar from "./component/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Gifts from './pages/Gifts';
import Menu from "./pages/Menu";
import Locations from "./pages/Locations";
import Newsletter from "./pages/Newsletter";
import Footer  from "./component/Footer";
import Shop from "./pages/Shop"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
          <Route path='/gifts' exact element = {<Gifts/>}/>
          <Route path='/locations' exact element = {<Locations/>}/>
          <Route path='/menu' exact element = {<Menu/>}/>
          <Route path='/newsletter' exact element = {<Newsletter/>}/>
          <Route path='/shop' exact element = {<Shop/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
