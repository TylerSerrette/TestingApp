import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import AnalyticsTab from './pages/AnalyticsTab/AnalyticsTab';
import DashBoardTab from './pages/DashBoardTab/DashBoardTab';
import ScheduleTab from './pages/ScheduleTab/ScheduleTab';
import WorkoutsTab from './pages/WorkoutsTab/WorkoutsTab';
import FoodTab from './pages/FoodTab/FoodTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/Dashboard',
    element: <DashBoardTab />,
  },
  {
    path: '/Analytics',
    element: <AnalyticsTab />,
  },
  {
    path: '/Schedule',
    element: <ScheduleTab />,
  },
  {
    path: '/Workouts',
    element: <WorkoutsTab />,
  },
  {
    path: '/Food',
    element: <FoodTab />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
