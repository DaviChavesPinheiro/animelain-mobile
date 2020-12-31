import React from 'react';

import AuthRoutes from '../../modules/auth/routes/auth.routes';
import AppRoutes from '../../modules/app/routes/app.routes';

import { useAuth } from '../../modules/auth/hooks/auth';
import Loading from '../pages/Loading';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
