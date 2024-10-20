import { Box, Flex, HStack, Text, useTheme } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Pagination() {
	// Current Page
	const theme = useTheme();

	const [searchParams, setSearchParams] = useSearchParams();

	const [page, setPage] = useState<number>(parseInt(searchParams.get('pa') || '1'));

	const currentPage = Number(page);
	// Render Pagination Button
	const renderPaginationButtons = () => {
		const totalPages = 10; // Replace with the total number of pages in your data
		const buttonsToShow = 4;
		const halfButtonsToShow = Math.floor(buttonsToShow / 2);

		const startPage = Math.max(1, currentPage - halfButtonsToShow);
		const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

		const box = [];

		const handlePageClick = (pageNumber: number) => {
			if (pageNumber !== page) {
				setSearchParams({ pa: pageNumber.toString() });
				setPage(pageNumber);
			}
		};

		for (let i = startPage; i <= endPage; i++) {
			box.push(
				<Box
					cursor={'pointer'}
					key={i}
					bgColor={'transparent'}
					p={{ base: '.25em .5em' }}
					border={
						i === page
							? `1.5px solid ${theme.colors.primary}`
							: `1.5px solid ${theme.colors.border}`
					}
					borderRadius={'.5em'}
					onClick={() => {
						handlePageClick(i);
					}}
				>
					<Text fontWeight={'bold'} fontSize={'.75em'}>
						{i}
					</Text>
				</Box>,
			);
		}
		return box;
	};
	//   NAVIGATE
	const navigate = useNavigate();

	return (
		<Flex justifyContent={'space-between'} alignItems={'center'}>
			<Box display={{ base: 'none' }}></Box>
			<Box>
				<HStack>{renderPaginationButtons()}</HStack>
			</Box>
		</Flex>
	);
}
