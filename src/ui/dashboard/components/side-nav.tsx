import {Flex, Heading, VStack, useTheme} from '@chakra-ui/react';
import {BsLaptop} from 'react-icons/bs';
import {TbBoxSeam, TbCategory2, TbReport} from 'react-icons/tb';
import {IoIosPeople} from 'react-icons/io';
import {SideNavLink} from './side-nav-link';

interface SideNavProps {
    sideNavDisplay: boolean;
}

export default function SideNav({sideNavDisplay}: SideNavProps) {
    const theme = useTheme();
    return (
        <Flex
            top={'0'}
            w={sideNavDisplay ? '13.75em' : '3em'}
            h={'100%'}
            bgColor={'background'}
            borderRight={`2px solid ${theme.colors.primary}`}
            overflow={'hidden'}
            display={'flex'}
            px={sideNavDisplay ? '1em' : '.5em'}
            py={'1em'}
            flexDir={'column'}
            rowGap={'1.5em'}
            alignItems={'center'}
            justifyContent={'flex-start'}
        >
            <Flex
                alignItems={'center'}
                flexDir={'column'}
                justifyContent={'center'}
                w={'100%'}
                h={'3em'}
                p={'1em'}
            >
                <Heading as={'h1'} fontSize={'lg'}>
                    POS
                </Heading>
            </Flex>
            <VStack w={'100%'} spacing={'1em'} align={'center'}>
                <SideNavLink
                    sideNavDisplay={sideNavDisplay}
                    text={'Overview'}
                    icon={<BsLaptop/>}
                    to={'/dashboard/overview'}
                />
                <SideNavLink
                    sideNavDisplay={sideNavDisplay}
                    text={'Products'}
                    to={'/dashboard/products'}
                    icon={<TbBoxSeam/>}
                />
                <SideNavLink
                    sideNavDisplay={sideNavDisplay}
                    text={'Product Categories'}
                    to={'/dashboard/product-categories'}
                    icon={<TbCategory2/>}
                />
                <SideNavLink
                    sideNavDisplay={sideNavDisplay}
                    text={'Transaction'}
                    icon={<TbReport/>}
                    to={'/dashboard/transaction'}
                />
                <SideNavLink
                    sideNavDisplay={sideNavDisplay}
                    text={'Employee'}
                    to={'#'}
                    icon={<IoIosPeople/>}
                />
            </VStack>
        </Flex>
    );
}
