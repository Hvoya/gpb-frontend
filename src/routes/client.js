import ClientMainPage from 'pages/ClientMainPage/ClientMainPage';
import SingleIdeaPage from 'pages/SingleIdeaPage/SingleIdeaPage';

export const clientRoutes = [
  {
    path: '/idea/:id',
    component: SingleIdeaPage,
  },
  {
    path: '/',
    exact: true,
    component: ClientMainPage,
  },
];
