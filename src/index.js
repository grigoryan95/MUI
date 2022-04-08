import {StrictMode} from "react";
import './index.css';
import App from "./App";
import * as ReactDOM from "react-dom";
import {theme} from "./theme/theme";
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App/>
    </StrictMode>
  </ThemeProvider>
,
  document.getElementById('root')
);


