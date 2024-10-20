import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
export default function RootError() {
	const theme = useTheme();
	const error: any = useRouteError();
	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return (
				<Box>
					<Text>This page doesn't exist</Text>
					<Link to='/'>Go back home</Link>
				</Box>
			);
		} else {
			return (
				<Box>
					<Text>An error occurred: {error.statusText}</Text>
					<Link to='/'>Go back home</Link>
				</Box>
			);
		}
	}

	return (
		<Box w={'100vw'} maxW={'100vw'} minH={'100vh'} h={'100vh'} maxH={'100vh'}>
			<Flex
				flexDir={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				w={'100%'}
				h={'100%'}
				minH={'100%'}
			>
				<Text>Something went wrong.</Text>
				<Link to='/'>
					<ChakraLink color={`${theme.colors.link}`}>Go back home</ChakraLink>
				</Link>
			</Flex>
		</Box>
	);
}
