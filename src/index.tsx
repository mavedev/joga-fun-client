import React from 'react';
import ReactDOM from 'react-dom';
import * as preinit from 'preinit';
import App from './components/App';

preinit.configTranslations();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
