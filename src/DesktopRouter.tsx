import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './desktop/Main/pages/MainPage';

const router = createBrowserRouter([{ path: '/', element: <MainPage /> }]);

const DesktopRouter = () => {
  return <RouterProvider router={router} />;
};

export default DesktopRouter;
