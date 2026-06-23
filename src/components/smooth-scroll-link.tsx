import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmoothScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function SmoothScrollLink({
  href,
  children,
  ...props
}: SmoothScrollLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
