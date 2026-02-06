import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className ?? ''}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span>{children}</span>
    </button>
  );
}
