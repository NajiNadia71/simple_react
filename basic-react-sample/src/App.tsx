import * as React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import { Outlet } from 'react-router';
import type { Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'data-grid',
    title: 'data-grid',
    icon: < FormatListNumberedIcon/>,
  },
  {
    segment: 'sample-stepper',
    title: 'stepper',
    icon: < AssignmentAddIcon/>,
  },{
    segment: 'charts',
    title: 'chart',
    icon: < BarChartIcon/>,
  },
];



export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} 
    
    branding={{
      logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
      title: 'DEMO Test',
      homeUrl: '/toolpad/core/introduction',
    }}
    
    
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
