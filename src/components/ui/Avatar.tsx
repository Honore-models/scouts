import { type ImgHTMLAttributes, forwardRef } from 'react';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  name?: string;
  size?: AvatarSize;
  fallbackColor?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: 'w-6 h-6 text-[10px]',
  sm: 'w-8 h-8 text-[12px]',
  md: 'w-10 h-10 text-[14px]',
  lg: 'w-14 h-14 text-[18px]',
  xl: 'w-20 h-20 text-[24px]',
};

const colors = [
  'bg-[#FF6B35] text-white',
  'bg-[#007AFF] text-white',
  'bg-[#5856D6] text-white',
  'bg-[#34C759] text-white',
  'bg-[#FF9500] text-white',
  'bg-[#FF3B30] text-white',
  'bg-[#AF52DE] text-white',
  'bg-[#00C7BE] text-white',
];

function getInitials(name?: string): string {
  if (!name) return '?';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name?: string): string {
  if (!name) return colors[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ name, size = 'md', src, alt, fallbackColor, className = '', ...props }, ref) => {
    const sizeClass = sizeStyles[size];
    const fallbackClass = fallbackColor || getColorFromName(name);

    if (!src) {
      return (
        <div
          className={`
            ${sizeClass}
            ${fallbackClass}
            rounded-full
            flex items-center justify-center
            font-semibold
            select-none
            ${className}
          `}
        >
          {getInitials(name)}
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={src}
        alt={alt || name || 'Avatar'}
        className={`${sizeClass} rounded-full object-cover ${className}`}
        {...props}
      />
    );
  }
);

Avatar.displayName = 'Avatar';
export default Avatar;
