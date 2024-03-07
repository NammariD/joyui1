import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import BasicButtons from './Demo';
import Demo from './Demo2';
import StepsSlider from './component';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Demo />
        <Demo />
        <Demo2 />
        <Demo2 />
        <StepsSlider />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
