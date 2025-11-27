import {Flex, Grid, Heading, VStack} from "@chakra-ui/react";
import BestSellerCard from "./component/best-seller-card";

export default function BestSeller() {
    return (
        <VStack align={"stretch"} px={".5em"}>
            <Heading as={"h2"} fontSize={"lg"}>Our Best Seller</Heading>
            <Grid w="100%"
                  maxW="100%"
                  gridTemplateColumns="1fr 1fr"
                  gridAutoRows={{base: "18em", sm: "20em"}}
                  alignItems="stretch"
                  gap=".5em"
                  minH={"15em"}
            >
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
                <BestSellerCard/>
            </Grid>
        </VStack>
    )
}