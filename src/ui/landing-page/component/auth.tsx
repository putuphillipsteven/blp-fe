import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { keepLogin } from '../../../utils/redux/reducer/auth-reducer';
import { AppDispatch } from '../../../utils/redux/store';

const Auth = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useDispatch<AppDispatch>();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			await dispatch(keepLogin());
			setIsLoaded(true);
		};

		fetchData();
	}, [dispatch]);

	// Render a loading state until `dispatch` completes
	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
};

export default Auth;
