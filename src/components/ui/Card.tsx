import { type HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, padding = 'md', className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`
          bg-[var(--color-bg-elevated)] 
          border border-[var(--color-border-light)]
          rounded-[var(--radius-xl)] 
          shadow-[var(--shadow-sm)]
          ${paddingStyles[padding]}
          ${hover ? 'transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-border)] cursor-pointer' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;
