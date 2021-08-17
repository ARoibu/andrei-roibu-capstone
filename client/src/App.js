import './App.css';
import {BrowserRouter, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Log from './pages/Log/Log'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Home />
          <Log />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
