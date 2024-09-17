import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './mobile/Main/pages/MainPage';

const router = createBrowserRouter([{ path: '/', element: <MainPage /> }]);

const MobileRouter = () => {
  return <RouterProvider router={router} />;
};

export default MobileRouter;
