import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import App from './App';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Protected from './components/ProtectedComponent';
import Dashboard from './pages/Dashboard';
import useAuthentication from './hooks/useAuthentication';
import { useContext } from 'react';

export default function AppRouter() {
    const {AuthCtx} = useAuthentication();
    const {user} = useContext(AuthCtx);
    console.log(user);
    const router = createBrowserRouter([
      {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '/',
            element: <WelcomePage/>,
            errorElement: <ErrorPage/>,
          },
          {
            path: 'signup',
            element: <SignUpPage/>,
            errorElement: <ErrorPage/>,
          },
          {
            path: 'login',
            element: <LoginPage/>,
            errorElement: <ErrorPage/>,
          },
          {
            path: '/dashboard',
            element: <Protected isSignedIn={!!user}><Dashboard/></Protected>,
            errorElement: <ErrorPage/>,
          }
        ],
      },
    ]);
    return <RouterProvider router={router}/>
}
