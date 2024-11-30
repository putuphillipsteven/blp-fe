import { useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/store';
import { Navigate } from 'react-router-dom';

interface ManagerEmployeeProtectedRouteProps {
	children: React.ReactNode;
}

export default function ManagerEmployeeProtectedRoute({
	children,
}: ManagerEmployeeProtectedRouteProps) {
	const user = useSelector((state: RootState) => state.AuthReducer);

	console.log("user: ", user)

	const roleId = user.user.role_id;

	const isManagerOrEmployee = (roleId === 1 || roleId === 2) && true;

	const token = localStorage.getItem('token');

	const isLoggedIn = Boolean(token);

	if (isManagerOrEmployee) {
		return <>{children}</>;
	} else if (!isManagerOrEmployee) {
		console.log("Sorry access is blocked, your role_id: ", roleId);
		return <Navigate to='/' />;
	} else if (isLoggedIn) {
		console.log("Sorry login first please");
		return <Navigate to='/signin' />;
	}
}
