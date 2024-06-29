import './assets/styles/developer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import React from 'react';
import { useDispatch } from 'react-redux'
import ErrorBoundary from "./components/_common/ErrorBoundary/ErrorBoundary";
import AppWrapper from 'layouts/AppWrapper'
import {NotificationContainer} from 'react-notifications';
import RouteWrapper from 'layouts/RouteWrapper';
function App() {
  const dispatch = useDispatch();
  
  return (
    <ErrorBoundary>
      <AppWrapper>
        <NotificationContainer />
        <RouteWrapper />
      </AppWrapper>
    </ErrorBoundary>
  );
}

export default App;
