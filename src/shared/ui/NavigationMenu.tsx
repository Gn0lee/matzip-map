import { IconButton, Menu, MenuButton, MenuButtonProps, MenuItem, MenuList, MenuProps } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useNavigate } from '@tanstack/react-router';

interface NavigationMenuProps {
	menuProps?: MenuProps;
	menuButtonProps?: MenuButtonProps;
}

export default function NavigationMenu({ menuProps, menuButtonProps }: NavigationMenuProps) {
	const navigate = useNavigate();

	const handleMenuItemClick = (path: string) => () => {
		navigate({ to: path });
	};

	return (
		<Menu {...menuProps}>
			<MenuButton
				{...menuButtonProps}
				as={IconButton}
				aria-label="Options"
				icon={<HamburgerIcon />}
				variant="outline"
			/>
			<MenuList>
				<MenuItem onClick={handleMenuItemClick('')}>홈</MenuItem>
				<MenuItem onClick={handleMenuItemClick('/user')}>계정 정보</MenuItem>
			</MenuList>
		</Menu>
	);
}
