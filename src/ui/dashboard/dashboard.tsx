import { Outlet } from 'react-router-dom';

import { Box, Flex, useTheme } from '@chakra-ui/react';
import { useState } from 'react';
import SideNav from './components/side-nav';
import DashboardNavBar from './components/nav-bar/dashboard-nav-bar';

export default function Dashboard() {
	const [sideNavDisplay, setSideNavDisplay] = useState(true);

	const toggleSideNav = () => {
		setSideNavDisplay(!sideNavDisplay);
	};

	const theme = useTheme();

	return (
		<Box
			maxW={'100vw'}
			overflow={'hidden'}
			minH={'100vh'}
			display={'flex'}
			columnGap={1}
			alignItems={'stretch'}
		>
			<Box w={sideNavDisplay ? '13.75em' : '3em'} minH={'100%'} backgroundColor={'background'}>
				<SideNav sideNavDisplay={sideNavDisplay} />
			</Box>
			<Box
				p={'1em'}
				overflow={'hidden'}
				w={'100%'}
				flex={1}
				display={'flex'}
				backgroundColor={'background'}
			>
				<Flex w={'100%'} h={'100%'} flexDir={'column'} rowGap={'1.5em'}>
					<DashboardNavBar toggleSideNavDisplay={toggleSideNav} />
					<Box
						w={'100%'}
						h={'100%'}
						overflow={'hidden'}
						py={'1em'}
						px={'1em'}
						bgColor={'background'}
						borderRadius={'.5em'}
						border={`2px solid ${theme.colors.primary}`}
					>
							<Outlet />
					</Box>
				</Flex>
			</Box>
		</Box>
	);
}
