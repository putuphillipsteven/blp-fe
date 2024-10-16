import { Flex, Icon } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignInModal from './sign-in-modal';
import { store } from '../../../utils/redux/store';
import { ProfileModal } from '../../../features/dashboard/components/profile-modal';
import { useEffect, useState } from 'react';
interface NavBarProps {
	toggleSideNavDisplay: VoidFunction;
}
export default function NavBar({ toggleSideNavDisplay }: NavBarProps) {
	const user = store.getState().AuthReducer;
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.isLogin);
	useEffect(() => {
		setIsUserLoggedIn(user.isLogin);
	}, []);
	return (
		<Flex
			w={'100%'}
			h={'fit-content'}
			p={'.5em'}
			justifyContent={'space-between'}
			rowGap={'.5em'}
			flexDir={{ base: 'column' }}
		>
			<Flex w={'100%'} justifyContent={'space-between'}>
				<Flex alignItems={'center'} justifyContent={'center'} columnGap={4}>
					<Icon
						as={GiHamburgerMenu}
						width={6}
						height={6}
						cursor={'pointer'}
						onClick={toggleSideNavDisplay}
					/>
				</Flex>
				{isUserLoggedIn ? <ProfileModal /> : <SignInModal />}
			</Flex>
		</Flex>
	);
}
