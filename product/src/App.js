import './App.css';
import { Route, Routes} from 'react-router-dom';
import Usecases from './components/Usecases';
// import Another from './components/Another';
import Onemore from './components/Onemore';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">

      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Onemore />} />
          <Route path="/usecases" element={<Usecases />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
