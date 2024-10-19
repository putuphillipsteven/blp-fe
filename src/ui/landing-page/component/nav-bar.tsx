import { Flex, Icon } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignInModal from './sign-in-modal';
import { AppDispatch, RootState, store } from '../../../utils/redux/store';
import { ProfileModal } from '../../../features/dashboard/components/profile-modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface NavBarProps {
	toggleSideNavDisplay: VoidFunction;
}

export default function NavBar({ toggleSideNavDisplay }: NavBarProps) {
	const user = useSelector((state: RootState) => state.AuthReducer);

	const [isUserLoggedIn, setIsUserLoggedIn] = useState(user.isLogin);

	useEffect(() => {
		setIsUserLoggedIn(user.isLogin);
	}, [user.isLogin]);

	return (
		<Flex
			w={'100%'}
			h={'4em'}
			p={'.5em'}
			justifyContent={'space-between'}
			rowGap={'.5em'}
			alignItems={'center'}
			flexDir={{ base: 'column' }}
		>
			<Flex
				w={'100%'}
				h={'100%'}
				justifyContent={'space-between'}
				alignItems={'center'}
				overflow={'hidden'}
			>
				<Flex alignItems={'center'} justifyContent={'center'} columnGap={4}>
					<Icon
						as={GiHamburgerMenu}
						width={6}
						height={6}
						cursor={'pointer'}
						onClick={toggleSideNavDisplay}
					/>
				</Flex>
				{user.isLogin ? <ProfileModal /> : <SignInModal setIsUserLoggedIn={setIsUserLoggedIn} />}
			</Flex>
		</Flex>
	);
}
