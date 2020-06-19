import { useHistory, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';

import { path } from '@/enums/path';
import { getToken } from '@/utils/ls';
import { login } from '@/store/actions/user';

const GuardHoc = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const token = getToken();
  const isAuthPath = location.pathname.includes(path.auth);

  if (token) dispatch(login());
  if (!token && !isAuthPath) history.push(path.auth);

  return children;
};

export default GuardHoc;
