import {Box, Container, Grid, Heading, useTheme, VStack} from "@chakra-ui/react";

export default function OurCategories() {
    const theme = useTheme();
    return (
        <VStack align={"stretch"} w={"100%"} maxW={"100%"} bgColor={"red"}>
            <Heading as={"h2"} fontSize={"lg"}>Our Categories</Heading>
            <Grid w="100%"
                  maxW="100%"
                  gridTemplateColumns="1fr 1fr"
                  gridAutoRows="10em"
                  alignItems="stretch"
                  gap="1em"
                  minH={"15em"}
            >
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                     shadow={`0 4px 0 ${theme.colors.primary}`}
                ></Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                     shadow={`0 4px 0 ${theme.colors.primary}`}></Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                     shadow={`0 4px 0 ${theme.colors.primary}`}></Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                     shadow={`0 4px 0 ${theme.colors.primary}`}></Box>
            </Grid>
        </VStack>
    )
}