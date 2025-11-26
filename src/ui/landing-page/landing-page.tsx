import {Container, useTheme, VStack} from '@chakra-ui/react';
import LandingPageNavBar from './component/landing-page-nav-bar';
import {useState} from 'react';
import {RootState} from "../../utils/redux/store";
import {useSelector} from 'react-redux';
import Jumbotron from "./component/jumbotron";
import OurCategories from "./component/our-categories";
import OurLocation from "./component/our-location";
import OurContacts from "./component/our-contacts";
import LandingPageFooter from "./component/landing-page-footer";

export default function LandingPage() {
    const theme = useTheme();
    const [sideNavDisplay, setSideNavDisplay] = useState(true);
    const toggleSideNav = () => {
        setSideNavDisplay(!sideNavDisplay);
    };

    const user = useSelector((state: RootState) => state.AuthReducer);


    return (
        <Container maxW={"100vw"} minH={"100vh"} p={"0"}>
            <VStack
                w={"full"}
                spacing={'1em'}
                bgColor={theme.colors.bacgkround}
            >
                <LandingPageNavBar toggleSideNavDisplay={toggleSideNav}/>
                <Jumbotron/>
                <OurCategories/>
                <OurLocation/>
                <OurContacts/>
                <LandingPageFooter/>
            </VStack>
        </Container>

    );
}
