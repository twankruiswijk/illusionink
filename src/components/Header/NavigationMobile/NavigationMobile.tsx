import { Menu } from 'lucide-react';
import type { NavigationLinks } from '@/components/Header/Header.tsx';
import { MobileMenuItem } from '@/components/Header/NavigationMobile/MobileMenuItem.tsx';
import { Accordion } from '@/components/ui/Accordion/Accordion.tsx';
import { Button } from '@/components/ui/Button/Button';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet/Sheet';

export function NavigationMobile({ links }: { links: NavigationLinks }) {
	return (
		<div className="flex md:hidden gap-4 items-center flex-grow">
			<a href="/" className="flex items-center gap-2">
				<Logo className="h-12" />
				<span className="sr-only text-lg font-semibold">Illusion Ink.</span>
			</a>

			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon">
						<Menu className="size-4" />
					</Button>
				</SheetTrigger>
				<SheetContent className="overflow-y-auto">
					<SheetHeader>
						<SheetTitle>
							<a href="/" className="flex items-center gap-2">
								<Logo className="h-16" />
								<span className="sr-only text-lg font-semibold">
									Illusion Ink.
								</span>
							</a>
						</SheetTitle>
					</SheetHeader>
					<div className="my-6 flex flex-col gap-6">
						<Accordion
							type="single"
							collapsible
							className="flex w-full flex-col gap-4"
						>
							{links.map((item) => (
								<MobileMenuItem key={item.label} item={item} />
							))}
						</Accordion>
					</div>
					<div className="flex flex-col gap-3">
						<Button asChild variant="outline">
							<a href="/tattoos">Bekijk de tattoos</a>
						</Button>
						<Button asChild>
							<a href="/salonized">Maak een afspraak</a>
						</Button>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
