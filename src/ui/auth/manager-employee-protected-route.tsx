import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';
import {RootState} from '../../utils/redux/store';

interface ManagerEmployeeProtectedRouteProps {
    children: React.ReactNode;
}

export default function ManagerEmployeeProtectedRoute({
                                                          children,
                                                      }: ManagerEmployeeProtectedRouteProps) {
    const user = useSelector((state: RootState) => state.AuthReducer);

    const roleId = user.user.role_id;

    const isManagerOrEmployee = (roleId === 1 || roleId === 2) && true;

    const accessToken = localStorage.getItem('accessToken');

    const isLoggedIn = Boolean(accessToken);

    if (isManagerOrEmployee) {
        return <>{children}</>;
    } else if (isLoggedIn == false) {
        return <Navigate to='/sign-in'/>;
    } else if (!isManagerOrEmployee) {
        return <Navigate to='/'/>;
    }
}
