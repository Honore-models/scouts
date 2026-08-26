import { type HTMLAttributes, forwardRef } from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'accent';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]',
  primary: 'bg-[var(--color-primary-light)] text-[var(--color-primary)]',
  success: 'bg-[#E8F8ED] text-[#1B8C3B] dark:bg-[#1A2E1F] dark:text-[#34C759]',
  warning: 'bg-[#FFF4E5] text-[#B35C00] dark:bg-[#2E2215] dark:text-[#FF9500]',
  error: 'bg-[#FFE8E7] text-[#CC2D24] dark:bg-[#2E1A1A] dark:text-[#FF3B30]',
  accent: 'bg-[#FFF0EB] text-[var(--color-accent)] dark:bg-[#2E1F18] dark:text-[var(--color-accent)]',
};

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center gap-1
          px-2.5 py-0.5 
          text-[12px] font-medium leading-5
          rounded-[var(--radius-full)]
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;
