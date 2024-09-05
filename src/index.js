import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
 let name = "shambhu";
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    {/* <>
      <h1>React is {5+5} times better with JSX</h1>
      <p>It is a paragraph</p>
    </> */}
    {/* <div>
      <h1>React is {5+5} times better with JSX</h1>
      <p>It is a paragraph</p>
    </div> */}

    <>
    <h1>Hello {name}</h1>
    <p>you are in LPU</p>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();
