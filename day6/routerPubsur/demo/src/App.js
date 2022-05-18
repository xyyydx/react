import './App.css';
import Demo from './component/demo/demo'
import RouterList from './route/routerList'
function App() {
  return (
    <div className="App">
      <Demo RouterList={RouterList} />
    </div>
  );
}

export default App;
