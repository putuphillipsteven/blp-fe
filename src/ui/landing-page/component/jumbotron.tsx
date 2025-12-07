import { Product } from '../../../interfaces/product.interfaces';
import { Box, Image, useTheme } from '@chakra-ui/react';
import { ProductRepository } from '../../../repositories/product.repository';
import { ProductInteractor } from '../../../interactor/product.interactor';
import { ProductController } from '../../../controller/product.controller';
import { useState } from 'react';

export default function Jumbotron() {
	const theme = useTheme();

	const productRepository = new ProductRepository();
	const productInteractor = new ProductInteractor(productRepository);
	const productController = new ProductController(productInteractor);

	const getProduct = async () => {
		const product = await productController.get({
			page: 1,
			page_size: 5,
			sort: 'asc',
		});
		return product;
	};

	const [products, setProducts] = useState<Product[] | null>(null);

	return (
		<Box p={'0.5em'} id={'jumbotron-container'} minW={'100%'} maxW={'100%'}>
			<Box
				borderRadius={'1em'}
				minH={'10em'}
				h={'10em'}
				maxH={'10em'}
				border={`2px solid ${theme.colors.primary}`}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Image
					src={'/public/ck-logo.png'}
					objectFit='contain'
					minH={'10em'}
					h={'10em'}
					maxH={'10em'}
				/>
			</Box>
		</Box>
	);
}
