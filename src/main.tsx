import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme.ts';
import { Provider } from 'react-redux';
import { store } from './utils/redux/store.ts';
import App from './app.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</Provider>,
);
