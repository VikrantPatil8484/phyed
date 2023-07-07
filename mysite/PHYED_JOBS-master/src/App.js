
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import SingleJob from './pages/SingleJob';
import JobsDetailsPage from './pages/JobsDetailsPage';

function App() {
  return (
    <div className="bg-gray-300 dark:bg-slate-900 text-color-mode h-full">
      < Header />
      <Routes>
        <Route path='/' element={ < Home /> } >
          <Route path='/:id' element={ < SingleJob /> } />
        </Route>
        <Route path='/jobs/:id' element={ < JobsDetailsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
