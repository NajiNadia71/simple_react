import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import { Outlet } from 'react-router';
import type { Navigation } from '@toolpad/core';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

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
    
     children: [
      {
        segment: 'info',
        title: 'sample-info',
        icon: <BarChartIcon />,
      },
       {
        segment: 'sales',
        title: 'sales',
        icon: <BarChartIcon />,
      },
      {
        segment: 'table',
        title: 'table',
        icon: <BarChartIcon />,
      },
    ],
  },
];



export default function App() {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} 
    
    branding={{
      logo:  < AutoFixHighIcon/>,
      title: 'Uni Guide',
      homeUrl: '/toolpad/core/introduction',
    }}
    
    
    >
      <Outlet />
    </ReactRouterAppProvider>
  );
}
