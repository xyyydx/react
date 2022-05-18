import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 根元素得路由
import { BrowserRouter } from 'react-router-dom';
// ui库得公共样式
import 'tdesign-react/es/style/index.css'
// 加载中得样式
import { Loading } from 'tdesign-react';
// react-redux
import { Provider } from 'react-redux'
// store
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div style={{ width: '100%', height: '100%', position: 'relative' }}><Loading style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} loading={true} text="拼命加载中..." size="small"></Loading></div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
