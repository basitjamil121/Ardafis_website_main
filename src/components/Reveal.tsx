"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
  id?: string;
};

// Fades/slides children in the first time they scroll into view.
// Styles live in globals.css (.reveal) and are disabled for reduced-motion users.
export default function Reveal({ children, className = "", delay = 0, as = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.Ref<never>}
      id={id}
      data-visible={visible}
      // drop the stagger delay once revealed so hover transitions stay immediate
      style={delay && !settled ? { transitionDelay: `${delay}ms` } : undefined}
      onTransitionEnd={visible && !settled ? () => setSettled(true) : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
