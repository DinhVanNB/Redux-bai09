import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Product';
import Home from './components/Home';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
