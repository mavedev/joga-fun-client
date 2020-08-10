import React from 'react';
import ReactDOM from 'react-dom';
import services from 'misc/services';
import App from './components/App';

services.translations.configTranslations();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
