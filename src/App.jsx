import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyList from './components/MyList';
import NotFound from './components/NotFound';
import MyNav from './components/MyNav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav/>
        <Routes>
          <Route path='/' element={ <MyList/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
