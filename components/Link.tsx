import React from 'react';

const Link = (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) =>
  <a
  {...props}
    className={`relative after:bg-zinc-400 after:dark:bg-zinc-600 after:-bottom-0.5 after:h-px after:absolute after:left-0 after:right-0 ${props.className}`}
  >
    {props.children}
  </a>

export default Link
