import { useTheme, VStack } from '@chakra-ui/react';
import NavBar from './component/nav-bar';
import { useState } from 'react';
import {RootState} from "../../utils/redux/store";
import { useSelector } from 'react-redux';

export default function LandingPage() {
	const theme = useTheme();
	const [sideNavDisplay, setSideNavDisplay] = useState(true);
	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	const user = useSelector((state: RootState) => state.AuthReducer);

	console.log("user: ", user)
	return (
		<VStack
			spacing={'1em'}
			bgColor={theme.colors.bacgkround}
			borderBottom={`2px solid ${theme.colors.primary}`}
		>
			<NavBar toggleSideNavDisplay={toggleSideNav} />
		</VStack>
	);
}
