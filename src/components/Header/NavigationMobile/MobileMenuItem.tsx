import type { NavigationLink } from '@/components/Header/Header.tsx';
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion/Accordion.tsx';

interface MobileMenuItemProps {
	item: NavigationLink;
}

export function MobileMenuItem({ item }: MobileMenuItemProps) {
	if (item.items) {
		return (
			<AccordionItem value={item.label} className="border-b-0">
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
		<a href={item.href} className="font-semibold">
			{item.label}
		</a>
	);
}
