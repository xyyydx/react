import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom'
import routes from './route'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
