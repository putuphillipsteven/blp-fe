import {Box, Image, Text, useTheme} from "@chakra-ui/react";

export default function Jumbotron() {
    const theme = useTheme();
    return (
        <Box id={'jumbotron-container'} minW={"100%"} maxW={"100%"}>
            <Box
                border={"2px solid black"}
                borderRadius={"1em"}
                minH={"10em"} h={"10em"} maxH={"10em"}
                border={`2px solid ${theme.colors.primary}`}
                shadow={`0 8px 0 ${theme.colors.primary}`}
            >
                <Image src={"./public/ck-logo.png"}
                       objectFit='contain'
                       minH={"10em"} h={"10em"} maxH={"10em"}/>
            </Box>
        </Box>
    )
}