import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
  React.Strict mode is on

    StrictMode renders components twice (on dev but not production) in order to detect any problems with your code and warn you about them (which can be quite useful).

  This answer was pointed out by @johnhendirx and written by @rangfu, see link and give him some love if this was your problem. If you're having issues 
  because of  this it usually means you're not using useEffect for its intended purpose. There's some great information about this in the beta docs you can read that here
   */
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
