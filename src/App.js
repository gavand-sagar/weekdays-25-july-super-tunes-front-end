import './App.css';
import Login from './pages/Login/Login.js'
import Faq from './pages/FAQ/Faq.js';
import About from './pages/About/About.js'
import Recipe from './pages/Recipe/Recipe.js'
import Header from './Header'

import { Link, Route, Routes } from 'react-router-dom';
import Table from './pages/Table/Table';
import Zoom from './pages/Zoom/Zoom';
import CatFact from './pages/CatFact/CatFact';
import Users from './pages/Users/Users';
import Posts from './pages/Posts/Posts';
import Signup from './pages/SignUp/Signup';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';
import AskQuestion from './pages/QuestionsPage/AskQuestion';
function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/about' element={<About />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/table' element={<Table />} />
        <Route path='/zoom' element={<Zoom />} />
        <Route path='/cat-facts' element={<CatFact />} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/questions' element={<QuestionsPage />} />
        <Route path='/ask-question' element={<AskQuestion />} />
        <Route path='/' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
