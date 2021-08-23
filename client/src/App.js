import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Log from './pages/Log/Log'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/category/:id' component={Home}/>
          <Route exact path='/log' component={Log}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
