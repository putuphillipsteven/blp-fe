import {Button, Flex, HStack, Icon, useTheme} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignInModal from './sign-in-modal';
import { RootState } from '../../../utils/redux/store';
import { useSelector } from 'react-redux';
import { ProfileModal } from '../../component/profile-modal';
import {useNavigate} from "react-router-dom";

interface NavBarProps {
	toggleSideNavDisplay: VoidFunction;
}

export default function LandingPageNavBar({ toggleSideNavDisplay }: NavBarProps) {

	const user = useSelector((state: RootState) => state.AuthReducer);

	const navigate = useNavigate();

	const theme = useTheme();
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
				{user.isLogin ? <ProfileModal /> :
					<HStack>
						<SignInModal />
						<Button
							onClick={() => navigate("/sign-up")}
							bgColor={theme.colors.background}
							border={`2px solid ${theme.colors.primary}`}
							shadow={`0 4px 0 ${theme.colors.primary}`}
						>
							Sign Up
						</Button>
					</HStack>

				}
			</Flex>
		</Flex>
	);
}
