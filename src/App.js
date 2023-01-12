import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Category} from './pages/Category'

import { Home } from './pages/Home';
import { Contacts } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import {Recipe} from './pages/Recipe'

function App() {
  return (
    <>
      <Router basename='/React-meal'>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/category/:name' component={Category}/>
            <Route path='/meal/:id' component={Recipe}/>
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
