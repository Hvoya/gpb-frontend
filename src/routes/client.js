import ClientMainPage from 'pages/ClientMainPage/ClientMainPage';
import SingleIdeaPage from 'pages/SingleIdeaPage/SingleIdeaPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';

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
  {
    path: '/profile',
    component: ProfilePage,
  },
];
