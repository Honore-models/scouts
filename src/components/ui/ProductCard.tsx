import Link from 'next/link';
import Avatar from './Avatar';
import Badge from './Badge';

interface ProductCardProps {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  url: string;
  category: string;
  votes: number;
  avatarColor?: string;
  makerName: string;
  featured?: boolean;
}

export default function ProductCard({
  id,
  name,
  tagline,
  url,
  category,
  votes,
  makerName,
  featured = false,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group block">
      <article
        className={`
          relative flex items-start gap-4 p-5
          bg-[var(--color-bg-elevated)] 
          border border-[var(--color-border-light)]
          rounded-[var(--radius-xl)]
          shadow-[var(--shadow-sm)]
          transition-all duration-[var(--transition-base)]
          hover:shadow-[var(--shadow-md)] hover:border-[var(--color-border)]
          hover:-translate-y-0.5
          ${featured ? 'ring-2 ring-[var(--color-primary)]/20' : ''}
        `}
      >
        {/* Product icon/thumbnail */}
        <div className="shrink-0 w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[20px] font-bold text-[var(--color-primary)]">
          {name[0]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors truncate">
              {name}
            </h3>
            <Badge variant="primary">{category}</Badge>
          </div>
          <p className="mt-1 text-[13px] text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
            {tagline}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <Avatar name={makerName} size="xs" />
            <span className="text-[12px] text-[var(--color-text-tertiary)]">{makerName}</span>
          </div>
        </div>

        {/* Upvote button */}
        <div className="shrink-0 flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-[var(--radius-md)] border border-[var(--color-border-light)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] transition-all duration-[var(--transition-fast)]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-[13px] font-semibold text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)]">
            {votes}
          </span>
        </div>
      </article>
    </Link>
  );
}
