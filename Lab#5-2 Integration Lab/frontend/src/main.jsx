import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CommentContextProvider } from './share/context/commentContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentContextProvider>
      <App />
    </CommentContextProvider>
  </React.StrictMode>
);
