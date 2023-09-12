import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'
import { TimeSeriesServiceImpl } from './services/TimeSeriesService'
import { HttpClient } from './httpClient/httpClient'
import { TimeSeriesProvider } from './context/TimeSeriesContext'

const httpClient = new HttpClient(import.meta.env.VITE_BASE_URL);
const timeService = new TimeSeriesServiceImpl(httpClient);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <TimeSeriesProvider timeSeriesService={timeService}>
      <App />
    </TimeSeriesProvider>
  </React.StrictMode>,
)
