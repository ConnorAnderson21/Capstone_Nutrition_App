import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { MyNav } from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
// import Login from './login';
import MacroCalc from './views/MacroCalc';
import FoodFinder from './views/FoodFinder';
import MyMacros from './views/MyMacros';

function App() {
  const [icons, setIcons] = useState(['/bread.png','breakfast.png','chicken-leg.png','chili-pepper.png',
        '/cookie.png','/french-fries.png','/fresh.png','/hamburger.png',
        '/healthy-food.png','/kebab.png','/meat.png','/milk.png','/orange.png',
        '/paella.png','/pizza.png','/ramen.png','/seafood.png','/spaghetti.png',
        '/taco.png','/vegetable.png',
        ]);

  return (
    <>
    <MyNav icons={icons}/>
    <Routes>
      <Route children path='/' element={<Home />} />
      <Route children path='/MacroCalc' element={<MacroCalc />} />
      <Route children path='/FoodFinder' element={<FoodFinder />} />
      <Route children path='/MyMacros' element={<MyMacros />} />
    </Routes>
      


      <footer><a href="https://www.flaticon.com/free-icons" title="">Icons created by Freepik - Flaticon</a></footer>
    </>
  )
}

export default App
