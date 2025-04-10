import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
        <h1>Hi this is sahil tiwari</h1>
        <h1>Hi this is done in order to check whether the github webhook in jenkins work or not</h1>
    
        <Header />
        <Routes>
          <Route path='/' element={ <NotesListPage/> } />
          <Route path='/note/:id' element={ <NotePage/> } />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
