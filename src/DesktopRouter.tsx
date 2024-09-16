import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './desktop/Main/pages/MainPage';
import WorksPage from './desktop/Works/pages/WorksPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/works', element: <WorksPage /> },
]);

const DesktopRouter = () => {
  return <RouterProvider router={router} />;
};

export default DesktopRouter;
