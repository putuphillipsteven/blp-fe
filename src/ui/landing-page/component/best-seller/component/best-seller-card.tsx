import {
    AspectRatio,
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider, Flex,
    Heading,
    Image, Link,
    Stack,
    StackDivider,
    Text,
    useTheme
} from "@chakra-ui/react";

export default function BestSellerCard() {
    const theme = useTheme();
    return (
        <Card h={"100%"} overflow={"hidden"} p={"0"} border={`2px solid ${theme.colors.primary}`}
              borderRadius={".5em"}>
            <CardBody p={"0"} overflow={"hidden"} display={'flex'} flexDir={"column"}>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        objectFit={"contain"}
                        placeholder={"Best seller product image"}
                        maxW={"100%"}
                        h={"auto"}
                    />
                </AspectRatio>

                <Flex h={"100%"} p={".5em"} flexDir={"column"} rowGap={".25em"} justifyContent={"center"}
                >
                    <Heading size={{base: 'xs'}}>Foto keluarga 450K</Heading>
                    <Text fontSize={{base: "xs"}} lineHeight={1.2}>
                        This package is perfect for small family.
                    </Text>
                    <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
                        <Text color={theme.colors.link} fontSize='md'>
                            $450
                        </Text>
                        <Link colorScheme='blue' fontSize={{base: "xs"}} textDecoration={"underline"}
                              textColor={theme.colors.link}>
                            Detail
                        </Link>
                    </Flex>

                </Flex>
            </CardBody>
            <Divider/>
            <CardFooter p={".5em"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <ButtonGroup display={"flex"} flexDir={"row"} justifyContent={"space-between"} alignItems={"center"}
                             w={"full"}>
                    <Button variant='solid' colorScheme='blue' size={{base: "xs"}}>
                        Book now
                    </Button>

                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}