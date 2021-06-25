import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div id="mode-toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <div className="container">
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
}
