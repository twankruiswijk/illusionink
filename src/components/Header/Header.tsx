import { NavigationDesktop } from '@/components/Header/NavigationDesktop/NavigationDesktop.tsx';
import { NavigationMobile } from '@/components/Header/NavigationMobile/NavigationMobile.tsx';
import { ModeToggle } from '@/components/ModeToggle/ModeToggle.tsx';
import { Button } from '@/components/ui/Button/Button.tsx';
import type { ComponentProps } from 'react';

export type NavigationSubItem = {
	label: string;
	href: string;
	description?: string;
};

export type NavigationLink = {
	href: string;
	label: string;
	items?: NavigationSubItem[];
};

export type NavigationLinks = NavigationLink[];

type HeaderProps = {
	links: NavigationLinks;
} & ComponentProps<'header'>;

export function Header({ links }: HeaderProps) {
	return (
		<header className="border-b">
			<div className="container flex items-center py-4">
				<NavigationDesktop links={links} />
				<NavigationMobile links={links} />

				<nav className="flex gap-4">
					<Button>Plan een gesprek</Button>
					<ModeToggle />
				</nav>
			</div>
		</header>
	);
}
