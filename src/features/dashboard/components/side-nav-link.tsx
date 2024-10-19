import { Box, Flex, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { checkLink } from '../../../utils/routing';

interface SideNavLinkProps {
	sideNavDisplay: boolean;
	to: string;
	icon: React.ReactElement;
	text: string;
}

export const SideNavLink = ({ icon, text, to, sideNavDisplay }: SideNavLinkProps) => {
	const pathname = useLocation().pathname;
	const theme = useTheme();
	return (
		<Link to={to} style={{ width: '100%' }}>
			<Flex
				w={'100%'}
				h={'2.5em'}
				borderRadius={'.5em'}
				columnGap={'1em'}
				alignItems={'center'}
				background={checkLink(to, pathname) ? `background` : 'transparent'}
				_hover={{
					background: 'primary',
					'& > div:nth-child(2) > p': {
						color: 'white',
					},
					'& > div:nth-child(1)': {
						color: 'white',
					},
				}}
				border={checkLink(to, pathname) ? `2px solid ${theme.colors.primary}` : 'transparent'}
				shadow={checkLink(to, pathname) ? `0 4px 0 ${theme.colors.primary}` : 'transparent'}
				justifyContent={sideNavDisplay ? 'start' : 'center'}
				p={'.65em'}
				cursor={'pointer'}
				overflow={'hidden'}
			>
				<Box color={checkLink(to, pathname) ? `primary` : `muted-foreground`}>{icon}</Box>
				<Box display={sideNavDisplay ? 'flex' : 'none'}>
					<Text
						color={checkLink(to, pathname) ? `primary` : `muted-foreground`}
						fontWeight={checkLink(to, pathname) ? `medium` : `normal`}
					>
						{text}
					</Text>
				</Box>
			</Flex>
		</Link>
	);
};
