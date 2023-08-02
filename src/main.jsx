import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FirebaseAppProvider } from 'reactfire'; 
import ProviderLayer from './ProviderLayer.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyDcv3Nu-1a-fBY2DsyDmL1VPo4wtMXrVzI",
  authDomain: "nutrition-app-e79da.firebaseapp.com",
  projectId: "nutrition-app-e79da",
  storageBucket: "nutrition-app-e79da.appspot.com",
  messagingSenderId: "553893053596",
  appId: "1:553893053596:web:c972d0c4defc88951f5959"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <ProviderLayer />
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
