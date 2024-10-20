import { Box, Heading, HStack, Icon, Text, useTheme } from '@chakra-ui/react';
import { TfiStatsUp } from 'react-icons/tfi';

interface TotalTransactionBoxProps {
	name: string;
}

export default function TotalTransactionBox({ name }: TotalTransactionBoxProps) {
	const theme = useTheme();
	return (
		<Box border={`2px solid ${theme.colors.primary}`} borderRadius={'.5em'} p={'.5em'}>
			<Heading fontWeight={'bold'} fontSize={{ base: 'xs' }}>
				{name} Transaction Today
			</Heading>
			<Text fontWeight={'bold'} fontSize={{ base: 'xs' }}>
				10
			</Text>
			<HStack>
				<Icon as={TfiStatsUp} color={'primary'} />
				<Text fontSize={{ base: 'xs' }}>+10 from yesterday</Text>
			</HStack>
		</Box>
	);
}
