import {Container, Flex, HStack, Icon, useTheme} from '@chakra-ui/react';
import {GiHamburgerMenu} from 'react-icons/gi';
import SignInModal from './sign-in-modal';
import {RootState} from '../../../utils/redux/store';
import {useSelector} from 'react-redux';
import {ProfileModal} from '../../component/profile-modal';

interface NavBarProps {
    toggleSideNavDisplay: VoidFunction;
}

export default function LandingPageNavBar({toggleSideNavDisplay}: NavBarProps) {

    const user = useSelector((state: RootState) => state.AuthReducer);

    const theme = useTheme();
    return (
        <Flex
            w={'100%'}
            h={'4em'}
            justifyContent={'space-between'}
            rowGap={'.5em'}
            alignItems={'center'}
            flexDir={{base: 'column'}}
            borderBottom={`2px solid ${theme.colors.primary}`}
            px={{base: ".5em", md: "10em"}}
            bgColor={{md: "red"}}
        >
            <Flex
                w={'100%'}
                h={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
                overflow={'visible'}
            >
                {user.isLogin ? <ProfileModal/> :
                    <HStack>
                        <SignInModal/>
                        {/*<Button*/}
                        {/*    onClick={() => navigate("/sign-up")}*/}
                        {/*    bgColor={theme.colors.background}*/}
                        {/*    border={`2px solid ${theme.colors.primary}`}*/}
                        {/*    shadow={`0 4px 0 ${theme.colors.primary}`}*/}
                        {/*>*/}
                        {/*    Sign Up*/}
                        {/*</Button>*/}
                    </HStack>

                }
                <Flex alignItems={'center'} justifyContent={'center'} columnGap={4}>
                    <Icon
                        as={GiHamburgerMenu}
                        width={6}
                        height={6}
                        cursor={'pointer'}
                        onClick={toggleSideNavDisplay}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
