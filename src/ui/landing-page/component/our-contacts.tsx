import {Container, Heading, HStack, Icon, Link, useTheme, VStack} from "@chakra-ui/react";
import {ImWhatsapp} from "react-icons/im";
import {FaInstagram} from "react-icons/fa";
import {IoMailOutline} from "react-icons/io5";


export default function OurContacts() {
    const theme = useTheme();
    return (
        <Container px={".5em"} minW={"100%"}>
            <VStack align={"stretch"}>
                <Heading as={"h2"} fontSize={"lg"}>Our Contacts</Heading>
                <VStack align={"stretch"}>
                    <HStack>
                        <Icon
                            as={ImWhatsapp}
                            width={6}
                            height={6}
                            cursor={'pointer'}
                        />
                        <Link fontSize={{base: "sm", sm: "md"}} color={theme.colors.link}
                              textDecoration={"underline"}>085272200776</Link>
                    </HStack>
                    <HStack>
                        <Icon
                            as={FaInstagram}
                            width={6}
                            height={6}
                            cursor={'pointer'}
                        />
                        <Link fontSize={{base: "sm", sm: "md"}} color={theme.colors.link}
                              textDecoration={{base: "underline"}}>birulangit.photography</Link>
                    </HStack>
                    <HStack>
                        <Icon
                            as={IoMailOutline}
                            width={6}
                            height={6}
                            cursor={'pointer'}
                        />
                        <Link fontSize={{base: "sm", sm: "md"}} color={theme.colors.link}
                              textDecoration={"underline"}>birulangit.jbi@gmail.com</Link>
                    </HStack>
                </VStack>
            </VStack>
        </Container>
    )
}