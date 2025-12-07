import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof document !== 'undefined') {
			return document.documentElement.classList.contains('dark')
				? 'dark'
				: 'light';
		}
		return 'light';
	});

	useEffect(() => {
		const isDark =
			theme === 'dark' ||
			(theme === 'system' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		document.documentElement.classList.toggle('dark', isDark);
	}, [theme]);

	return { theme, setTheme };
}
