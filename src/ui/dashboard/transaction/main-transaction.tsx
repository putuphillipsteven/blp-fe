import {
	Box,
	Flex,
	Grid,
	Input,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useTheme,
} from '@chakra-ui/react';
import { TransactionRepository } from '../../../repositories/transaction';
import { TransactionInteractor } from '../../../interactor/transaction.interactor';
import { TransactionController } from '../../../controller/transaction.controller';
import { useEffect, useState } from 'react';
// import Pagination from './component/pagination';
import TotalTransactionBox from './component/total-transaction-box';
import Pagination from './component/pagination-new';
export default function MainTransaction() {
	const transactionRepository = new TransactionRepository();
	const transactionInteractor = new TransactionInteractor(transactionRepository);
	const transactionController = new TransactionController(transactionInteractor);

	const getTransactions = async () => {
		const transaction = await transactionController.onGetTransaction({
			endDate: '2024-06-30',
			page: '1',
			pageSize: '10',
			startDate: '2024-06-01',
		});
		return transaction;
	};

	const [transactions, setTransactions] = useState<any | undefined>([]);

	// useEffect(() => {
	// 	const fetchTransactions = async () => {
	// 		const response = await getTransactions(); // getTransactions() returns a Promise<Transaction[] | undefined>
	// 		setTransactions(response); // This line is correct
	// 	};

	// 	fetchTransactions();
	// }, []);

	const theme = useTheme();
	return (
		<Box w={'100%'} h={'100%'} py={'.5em'} display={'flex'} flexDir={'column'} rowGap={4}>
			<Grid
				columnGap={2}
				templateColumns='repeat(4, minmax(9em, 1fr))'
				templateRows={'1'}
				h={'fit'}
				overflowX={{ base: 'scroll', md: 'hidden' }}
			>
				<TotalTransactionBox name='Total' />
				<TotalTransactionBox name='Cash' />
				<TotalTransactionBox name='Debit' />
				<TotalTransactionBox name='Transfer' />
			</Grid>
			<Box
				flex={1}
				w={'100%'}
				h={'100%'}
				border={`2px solid ${theme.colors.primary}`}
				p={'.5em'}
				borderRadius={'.5em'}
				display={'flex'}
				flexDir={'column'}
				overflow={'hidden'}
				rowGap={2}
			>
				<Flex
					columnGap={'.5em'}
					rowGap={'.5em'}
					flexDir={{
						base: 'column',
						md: 'row',
					}}
					justifyContent={'space-between'}
					h={'fit'}
				>
					<Input
						placeholder='Select date and time'
						size={{ base: 'sm' }}
						type='date'
						w={'fit'}
						p={'.5em'}
						border={`2px solid ${theme.colors.border}`}
						focusBorderColor={'transparent'}
						_focus={{ border: `2px solid ${theme.colors.ring}`, outline: 'none' }}
						outline={'none'}
						_hover={{ border: `2px solid ${theme.colors.ring}` }}
						borderRadius={'.5em'}
					/>
					<Input
						placeholder='Input text...'
						size={{ base: 'sm' }}
						type='text'
						w={'fit'}
						p={'.5em'}
						border={`2px solid ${theme.colors.border}`}
						focusBorderColor={'transparent'}
						_focus={{ border: `2px solid ${theme.colors.ring}`, outline: 'none' }}
						outline={'none'}
						_hover={{ border: `2px solid ${theme.colors.ring}` }}
						borderRadius={'.5em'}
					/>
				</Flex>
				<Box
					flex={1}
					display={'flex'}
					flexDir={'column'}
					w={'100%'}
					columnGap={2}
					justifyContent={'space-between'}
				>
					<Table variant={`customStripped`}>
						<Thead>
							<Tr>
								<Th>Transaction No</Th>
								<Th>Name</Th>
								<Th>Date</Th>
								<Th>Payment</Th>
								<Th>Amount</Th>
								<Th>Cashier</Th>
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							{transactions?.map((transaction: any) => {
								return (
									<Tr>
										<Td>00{transaction?.id}</Td>
										<Td>{transaction?.customer_name}</Td>
										<Td>{transaction?.date}</Td>
										<Td>{transaction?.payment_method?.method_name}</Td>
										<Td>{transaction?.payment_amount}</Td>
										<Td>{transaction?.user?.full_name}</Td>
									</Tr>
								);
							})}
						</Tbody>
					</Table>
					{/* <Pagination /> */}
					<Pagination />
				</Box>
			</Box>
		</Box>
	);
}
