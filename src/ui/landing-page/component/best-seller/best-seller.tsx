import {Grid, Heading, VStack} from "@chakra-ui/react";
import BestSellerCard from "./component/best-seller-card";

export default function BestSeller() {
    return (
        <VStack align={"stretch"} px={".5em"}>
            <Heading as={"h2"} fontSize={"lg"}>Our Best Seller</Heading>
            <Grid w="100%"
                  maxW="100%"
                  gridTemplateColumns={{base: "1fr 1fr", sm: "1fr 1fr 1fr", lg: "1fr 1fr 1fr 1fr"}}
                  gridAutoRows={{base: "17em", md: "20em", lg: "22em"}}
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