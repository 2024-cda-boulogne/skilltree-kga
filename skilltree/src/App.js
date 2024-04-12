import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Test from './pages/test';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/test" element={<Test />} />
         <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
