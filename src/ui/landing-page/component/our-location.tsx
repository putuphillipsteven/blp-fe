import {Container, Heading, Link, Text, useTheme} from "@chakra-ui/react";

export default function OurLocation() {
    const theme = useTheme();
    return (
        <Container px={".5em"}>
            <Heading as={"h2"} fontSize={"lg"}>Our Location</Heading>
            <Text>Jl. Sari Bakti No. 29A, Kel. Beliung, Kec. Alam Barajo, Jambi, 36129</Text>
            <Link href={"https://google.com"} color={theme.colors.link}>
                Google Maps
            </Link>
        </Container>
    )
}