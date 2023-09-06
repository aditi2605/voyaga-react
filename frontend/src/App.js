import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './views/MainPage.js';
import ResultPage from './views/ResultPage';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/result" element={<ResultPage />}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
