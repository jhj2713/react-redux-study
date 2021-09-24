import { Route } from 'react-router';
import NavBar from './components/NavBar';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';


function App() {
  return (
    <div>
      <NavBar/>
      <Route path="/" exact component={ListPage}/>
      <Route path="/write" exact component={WritePage}/>
    </div>
  );
}

export default App;
