// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Music from './components/Music';
import Playlist from './components/Playlist';
import Album from './components/Album';
import Premium from './components/Premium';
import Errorpage from './components/Errorpage';
import Login from './components/Login';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  
  return (
    <div className="App">
      <ErrorBoundary>
       <Routes>
          <Route path='/' element={<Home /> } />
      
          <Route path='music' element={<Music />}>
            <Route path='playlist' element={<Playlist />} />
            <Route path='album' element={<Album />} />
          </Route>

         
          <Route path='/premium' element={<Premium />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Errorpage />} />
          
        </Routes>
        </ErrorBoundary>
    </div>
  );
}

export default App;
