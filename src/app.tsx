import { Route, Routes } from 'react-router-dom';
import Auth from './ui/landing-page/component/auth';
import LandingPage from './ui/landing-page/landing-page';
import Dashboard from './ui/dashboard/dashboard';
import MainReport from './features/report/main-report';
import MainTransaction from './features/report/components/main-transaction';
import OverView from './ui/dashboard/overview';

export default function App() {
	return (
		<Auth>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route index element={<OverView />} />
					<Route path='/dashboard/report' element={<MainReport />}>
						<Route path='transaction' element={<MainTransaction />} />
					</Route>
				</Route>
			</Routes>
		</Auth>
	);
}
