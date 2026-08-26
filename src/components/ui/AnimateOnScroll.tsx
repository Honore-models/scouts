'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const animationStyles: Record<string, React.CSSProperties> = {
    'fade-in': {
      opacity: visible ? 1 : 0,
      transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    },
    'slide-up': {
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    },
    'scale-in': {
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1)' : 'scale(0.95)',
      transition: `opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
    },
  };

  return (
    <div ref={ref} className={className} style={animationStyles[animation]}>
      {children}
    </div>
  );
}
