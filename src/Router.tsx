import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './Main/pages/MainPage';

const router = createBrowserRouter([{ path: '/', element: <MainPage /> }]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
