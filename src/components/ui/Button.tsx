import { type ReactNode } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

interface AsButtonProps extends BaseButtonProps {
  onClick: () => void;
  href?: never;
}

interface AsLinkProps extends BaseButtonProps {
  onClick?: never;
  href: string;
}

type ButtonProps = AsButtonProps | AsLinkProps;

const sizeClasses = {
  xs: 'text-xs px-2 py-1',
  sm: 'text-sm px-2.5 py-1.5',
  md: 'text-sm px-3.5 py-2.5',
  lg: 'text-sm px-4 py-3',
  xl: 'text-sm px-5 py-3.5',
} as const;

// fill: linear-gradient(270deg, #FEDEBE 0.33%, #B58F6A 44.35%, #963 98.15%);
const colorClasses = {
  primary: 'bg-white text-black hover:bg-gray-100',
  secondary: 'bg-gray-500 text-white',
} as const;

export function Button({
  children,
  onClick,
  href,
  size = 'md',
  color = 'primary',
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 ease-in-out ${sizeClasses[size]} ${colorClasses[color]}`;

  if (href) {
    return (
      <a href={href} className={classes} role="button">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
