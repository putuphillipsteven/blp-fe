import {Flex, Text, VStack} from "@chakra-ui/react";
import SignInModal from "../landing-page/component/sign-in-modal";

export default function SignIn() {
    return (
        <Flex p='1em' w='100vw' maxW='100vw' maxH='100vh' h='100vh' alignItems='center' justifyContent='center'>
            <VStack>
                <Text align='center'>
                    You must sign-in first. <br/>Click button below
                </Text>
                <SignInModal />
            </VStack>

        </Flex>
    )
}