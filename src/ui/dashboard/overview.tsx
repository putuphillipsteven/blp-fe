import { Box, Flex, Text, useTheme, VStack } from '@chakra-ui/react';

export default function OverView() {
	const theme = useTheme();
	return (
		<Box>
			<Flex align={'stretch'} flexDir={{ base: 'column' }} rowGap={'1em'}>
				<Text>Overview</Text>
				<Flex
					align={'stretch'}
					justifyContent={'space-between'}
					flexDir={{ base: 'column', md: 'row' }}
					rowGap={'1em'}
					columnGap={'1em'}
				>
					<Box flex={1} p={'.5em'} bgColor={`${theme.colors.secondary}`} borderRadius={'.5em'}>
						<Text>This Week Sales</Text>
					</Box>
					<Flex flex={1} flexDir={{ base: 'column' }} rowGap={'1em'}>
						<Box p={'.5em'} bgColor={`${theme.colors.secondary}`} borderRadius={'.5em'}>
							<Text>Best Product</Text>
						</Box>
						<Box p={'.5em'} bgColor={`${theme.colors.secondary}`} borderRadius={'.5em'}>
							<Text>Employee</Text>
						</Box>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
}
