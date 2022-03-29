import { Container } from '@mui/material';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app"> 
        <Container>
          <Routes>
          <Route path='/' element={<Trending/>}  exact/>
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/search' element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>

  );
}

export default App;
