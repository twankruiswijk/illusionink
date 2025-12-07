import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button.tsx';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/DropdownMenu.tsx';
import { useTheme } from '@/hooks/useTheme';

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Verander thema</span>
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Licht
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Donker
				</DropdownMenuItem>

				<DropdownMenuItem onClick={() => setTheme('system')}>
					Systeem
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
