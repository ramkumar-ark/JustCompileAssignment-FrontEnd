import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import './index.css';
import useAuthentication from './hooks/useAuthentication';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ConnectedApp = () => {
  const {AuthProvider} = useAuthentication();
  return (
      <AuthProvider>
          <AppRouter/>
      </AuthProvider>
  );
};

root.render(
  <React.StrictMode>
    <ConnectedApp/>
  </React.StrictMode>
);
