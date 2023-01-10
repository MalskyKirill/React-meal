import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Contacts } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
