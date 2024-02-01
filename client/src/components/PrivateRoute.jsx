import { Outlet, Navigate } from 'react-router-dom';
import { useStore } from '../Context';

export default function PrivateRoute() {

    const { isAuthenticated } = useStore();

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}