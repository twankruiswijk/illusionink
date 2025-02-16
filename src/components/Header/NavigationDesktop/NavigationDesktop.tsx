import type { NavigationLinks } from '@/components/Header/Header.tsx';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/NavigationMenu/NavigationMenu.tsx';

export function NavigationDesktop({ links }: { links: NavigationLinks }) {
	return (
		<NavigationMenu className="hidden md:flex justify-normal max-w-full [&>*:first-child]:w-full">
			<NavigationMenuList className="justify-normal">
				<li>
					<a href="/" className="flex items-center gap-2">
						<Logo className="h-16" />
						<span className="sr-only text-lg font-semibold">Illusion Ink.</span>
					</a>
				</li>

				<ul className="flex justify-center w-full">
					{links.map(({ href, label }) => (
						<NavigationMenuItem key={href}>
							<NavigationMenuLink
								href={href}
								className={navigationMenuTriggerStyle()}
							>
								{label}
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</ul>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
