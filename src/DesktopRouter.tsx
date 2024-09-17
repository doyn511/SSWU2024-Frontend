import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DesignersPage from './desktop/Designers/pages/DesignersPage';
import DisplayPages from './desktop/Displays/pages/DisplayPages';
import MainPage from './desktop/Main/pages/MainPage';
import WorksPage from './desktop/Works/pages/WorksPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/works', element: <WorksPage /> },
  { path: '/designers', element: <DesignersPage /> },
  { path: '/displays', element: <DisplayPages /> },
]);

const DesktopRouter = () => {
  return <RouterProvider router={router} />;
};

export default DesktopRouter;
