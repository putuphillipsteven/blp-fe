import {Container, Heading, Link, Text, useTheme, VStack} from "@chakra-ui/react";

export default function OurLocation() {
    const theme = useTheme();
    return (
        <Container px={".5em"} minW={"100%"}>
            <VStack align={"stretch"}>
                <Heading as={"h2"} fontSize={"lg"}>Our Location</Heading>
                <Text textAlign={"justify"} lineHeight={1.2}>Jl. Sari Bakti No. 29A, Kel. Beliung, Kec. Alam Barajo,
                    Jambi,
                    36129</Text>
                <Link href={"https://google.com"} textDecoration={"underline"} color={theme.colors.link}>
                    Google Maps
                </Link>
            </VStack>
        </Container>
    )
}