import {Flex, HStack, Text, useTheme, VStack} from '@chakra-ui/react';
import LandingPageNavBar from './component/landing-page-nav-bar';
import {useState} from 'react';
import {RootState} from "../../utils/redux/store";
import {useSelector} from 'react-redux';
import Jumbotron from "./component/jumbotron";
import OurCategories from "./component/our-categories";

export default function LandingPage() {
    const theme = useTheme();
    const [sideNavDisplay, setSideNavDisplay] = useState(true);
    const toggleSideNav = () => {
        setSideNavDisplay(!sideNavDisplay);
    };

    const user = useSelector((state: RootState) => state.AuthReducer);

    console.log("user: ", user)
    return (
        <Flex w={"full"} flexDir={"column"} rowGap={".5em"}>
            <VStack
                w={"full"}
                spacing={'1em'}
                bgColor={theme.colors.bacgkround}
                borderBottom={`2px solid ${theme.colors.primary}`}
            >
                <LandingPageNavBar toggleSideNavDisplay={toggleSideNav}/>
            </VStack>
            <VStack p={".5em"} align={"stretch"} h="auto" overflow="visible">
                <Jumbotron/>
                <OurCategories/>
            </VStack>
        </Flex>

    );
}
