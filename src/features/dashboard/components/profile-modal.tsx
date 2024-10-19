import {
	Flex,
	Heading,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useTheme,
	VStack,
} from '@chakra-ui/react';
import { RootState } from '../../../utils/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../../../utils/redux/reducer/auth-reducer';
import { useNavigate } from 'react-router-dom';

export const ProfileModal = () => {
	const theme = useTheme();

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const user = useSelector((state: RootState) => state.AuthReducer);

	const userFullName = user?.user.first_name + ' ' + user?.user.last_name;

	const userEmail = user?.user?.email;

	return (
		<Menu autoSelect={false}>
			<MenuButton>
				<Flex
					border={`2px solid ${theme.colors.primary}`}
					w={'2.5em'}
					h={'2.5em'}
					borderRadius={'50%'}
					overflow={'hidden'}
				>
					<Image objectFit={'contain'} maxW={'100%'} height={'auto'} src='/ck-logo.png' />
				</Flex>
			</MenuButton>
			<MenuList
				marginTop={'1em'}
				display={'flex'}
				flexDir={'column'}
				border={`2px solid ${theme.colors.primary}`}
			>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'} columnGap={'1em'}>
						<VStack alignItems={'end'} spacing={'0'}>
							<Heading as={'h2'} fontSize={{ base: '1em' }}>
								{userFullName}
							</Heading>
							<Text fontSize={{ base: '.75em' }}>{userEmail}</Text>
						</VStack>
					</Flex>
				</MenuItem>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'}>
						<Link>My Profile</Link>
					</Flex>
				</MenuItem>
				<MenuItem>
					<Flex w={'100%'} justifyContent={'flex-end'}>
						<Link
							onClick={() => {
								dispatch(logoutSuccess());
								navigate('/');
							}}
						>
							Sign Out
						</Link>
					</Flex>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
