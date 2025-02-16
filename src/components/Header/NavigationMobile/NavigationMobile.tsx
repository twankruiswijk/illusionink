import type {
	NavigationLink,
	NavigationLinks,
} from '@/components/Header/Header.tsx';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion/Accordion.tsx';
import { Button } from '@/components/ui/Button/Button';
import { Logo } from '@/components/ui/Logo/Logo.tsx';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/Sheet/Sheet';
import { Menu } from 'lucide-react';

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
							{links.map((item) => renderMobileMenuItem(item))}
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

const renderMobileMenuItem = (item: NavigationLink) => {
	if (item.items) {
		return (
			<AccordionItem key={item.label} value={item.label} className="border-b-0">
				<AccordionTrigger className="py-0 font-semibold hover:no-underline">
					{item.label}
				</AccordionTrigger>
				<AccordionContent className="mt-2">
					{item.items.map((subItem) => (
						<a
							key={subItem.label}
							className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
							href={subItem.href}
						>
							<div>
								<div className="text-sm font-semibold">{subItem.label}</div>

								{subItem.description && (
									<p className="text-sm leading-snug text-muted-foreground">
										{subItem.description}
									</p>
								)}
							</div>
						</a>
					))}
				</AccordionContent>
			</AccordionItem>
		);
	}

	return (
		<a key={item.label} href={item.href} className="font-semibold">
			{item.label}
		</a>
	);
};
