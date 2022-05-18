import React, { useState, createContext } from 'react';
import './App.css';
import Hooks from './component/Hooks'
import { Routes, Route, Link, Navigate, useRoutes } from 'react-router-dom'
import RouteList from './route/routeList'

import First from './component/router/first'
import My from './component/router/my'

export const MyContext = createContext()

function App() {

  const [num, setNumState] = useState(1)

  const element = useRoutes(RouteList)

  return (
    <div className="App">

      <button onClick={() => { setNumState(num + 1) }}>{num}</button>

      <MyContext.Provider value={"传参  "}>
        <Hooks num={num} />
      </MyContext.Provider>


      {element}
      {/* <Routes>
        <Route path='/first' element={<First />}></Route>
        <Route path='/my' element={<My />}></Route>
        <Route path='/' element={<Navigate to="/first" />}></Route>
      </Routes> */}

      <Link to='/first'>first</Link>
      <Link to='/my'>MT</Link>

    </div >
  );
}

export default App;
