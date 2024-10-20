import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';
import { Box } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';

interface ManagerEmployeeProtectedRouteProps {
	children: any;
}

export default function ManagerEmployeeProtectedRoute({
	children,
}: ManagerEmployeeProtectedRouteProps) {
	const user = useSelector((state: RootState) => state.AuthReducer);

	const roleId = user.user.role_id;

	const isManagerOrEmployee = (roleId === 1 || roleId === 2) && true;

	const token = localStorage.getItem('token');

	const isLoggedIn = Boolean(token);

	if (isManagerOrEmployee) {
		return <>{children}</>;
	} else if (!isManagerOrEmployee) {
		return <Navigate to='/' />;
	} else if (isLoggedIn) {
		return <Navigate to='/signin' />;
	}
}
