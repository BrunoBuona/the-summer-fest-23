import './App.css';
import NotFound from './components/NotFound/NotFound';
import Home from "./components/Home/Home.jsx";
import Main from './layouts/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Main>
      <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/tickets" element={<ShoppingCart/>}/>
      <Route path="/" element={<Account/>}/>
      </Routes>
   </Main>
  )
}

export default App;
