import {Box, Flex, Grid, Heading, Text, useTheme, VStack} from "@chakra-ui/react";

export default function OurCategories() {
    const theme = useTheme();
    return (
        <VStack px={".5em"} align={"stretch"} w={"100%"} maxW={"100%"}>
            <Heading as={"h2"} fontSize={"lg"}>Our Categories</Heading>
            <Grid w="100%"
                  maxW="100%"
                  gridTemplateColumns="1fr 1fr"
                  gridAutoRows="10em"
                  alignItems="stretch"
                  gap=".5em"
                  minH={"15em"}
            >
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                     overflow={"hidden"}
                >
                    <Flex w={"100%"} minW={"100%"}
                          h={"100%"} minH={"100%"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        <Text>Photo Studio</Text>
                    </Flex>
                </Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                >
                    <Flex w={"100%"} minW={"100%"}
                          h={"100%"} minH={"100%"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        <Text>Photo Print</Text>
                    </Flex>
                </Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                >
                    <Flex w={"100%"} minW={"100%"}
                          h={"100%"} minH={"100%"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        <Text>Frame</Text>
                    </Flex>
                </Box>
                <Box borderRadius={".5em"} boxSizing="border-box"
                     border={`2px solid ${theme.colors.primary}`}
                >
                    <Flex w={"100%"} minW={"100%"}
                          h={"100%"} minH={"100%"}
                          alignItems={"center"}
                          justifyContent={"center"}>
                        <Text>Photo Editting</Text>
                    </Flex>
                </Box>
            </Grid>
        </VStack>
    )
}