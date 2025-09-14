import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import DashboardPage from './pages';
import OrdersPage from './pages/orders';
import Layout from './layouts/dashboard';
import DataGridDemo from './pages/DataGridDemo';
import StackBars from './pages/StackBars';
import CustomizedSteppers from './pages/CustomizedSteppers';
import FoodTable from './pages/FoodTable';
import infoSample from './pages/infoSample';

const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'orders',
            Component: OrdersPage,
          },
          {
            path: 'data-grid',
            Component:DataGridDemo ,
          },
          {
            path: 'sample-stepper',
            Component:CustomizedSteppers ,
          }
          ,
          {
            path: 'charts/sales',
            Component:StackBars ,
          },
          {
            path: 'charts/table',
            Component:FoodTable ,
          },
          {
            path: 'charts/info',
            Component:infoSample ,
          },
          ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
