import {Flex, Text, useTheme} from '@chakra-ui/react';


interface NavBarProps {
    toggleSideNavDisplay: VoidFunction;
}

export default function LandingPageFooter() {


    const theme = useTheme();
    return (
        <Flex
            w={'100%'}
            p={'.5em'}
            justifyContent={'space-between'}
            rowGap={'.5em'}
            alignItems={'center'}
            flexDir={{base: 'column'}}
            borderTop={`2px solid ${theme.colors.primary}`}
        >
            <Text>Birulangit Photography</Text>
        </Flex>
    );
}
