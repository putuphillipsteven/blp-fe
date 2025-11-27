import {Box, Container, Image, useTheme} from "@chakra-ui/react";

export default function Jumbotron() {
    const theme = useTheme();
    return (
        <Container p={"0.5em"} id={'jumbotron-container'} minW={"100%"} maxW={"100%"}>
            <Box
                borderRadius={"1em"}
                minH={"10em"} h={"10em"} maxH={"10em"}
                border={`2px solid ${theme.colors.primary}`}
            >
                <Image src={"./public/ck-logo.png"}
                       objectFit='contain'
                       minH={"10em"} h={"10em"} maxH={"10em"}/>
            </Box>
        </Container>
    )
}