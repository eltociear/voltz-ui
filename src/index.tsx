import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './fonts/PixelOperator/PixelOperatorMono8.ttf';
import './fonts/PixelOperator/PixelOperatorMono8-Bold.ttf';
import './fonts/DM_Sans/DMSans-Bold.ttf';
import './fonts/DM_Sans/DMSans-BoldItalic.ttf';
import './fonts/DM_Sans/DMSans-Italic.ttf';
import './fonts/DM_Sans/DMSans-Medium.ttf';
import './fonts/DM_Sans/DMSans-MediumItalic.ttf';
import './fonts/DM_Sans/DMSans-Regular.ttf';
import './index.css';
import { ThemeProvider } from './theme';
import { App } from './application';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
