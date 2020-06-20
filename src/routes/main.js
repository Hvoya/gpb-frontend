import ClientTemplate from 'templates/ClientTemplate/ClientTemplate';
import AuthPage from 'pages/AuthPage/AuthPage';
import { path } from '@/enums/path';

export const mainRoutes = [
  {
    path: path.auth,
    component: AuthPage,
  },
  {
    path: path.clientRoot,
    component: ClientTemplate,
  },
  // {
  //   path: path.moderationRoot,
  // },
];
