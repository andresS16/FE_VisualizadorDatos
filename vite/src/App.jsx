// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import SideBar from './components/SideBar'
import HomePage from './pages/Home'
import ProductPage from './pages/Products';
import NotFound from './pages/NotFound';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div id="wrapper">
      <SideBar/>
      <Switch>
      <Route exact path="/" component={HomePage} />
       <Route path="/products" component={ProductPage}/>    
      <Route path="*" component={NotFound}/>
      </Switch> 
    </div>
  
  );
}

export default App
