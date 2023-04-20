import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './views/HomePage.js'
import SearchPlace from './components/SearchPlace';
// import PopularPlaces from './components/PopularPlaces'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/searchplace" element={<SearchPlace />}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
